"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Panel = "where" | "when" | "who" | null;

const cityOptions = ["Los Angeles", "Topanga", "Vernon"];

export default function StickySearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousScrollY = useRef(0);
  const showRef = useRef(true);
  const [show, setShow] = useState(true);
  const [activePanel, setActivePanel] = useState<Panel>(null);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const guestSummary = useMemo(() => {
    const travelerCount = guests.adults + guests.children;
    if (travelerCount === 0 && guests.infants === 0 && guests.pets === 0) {
      return "Add guests";
    }

    const summary: string[] = [];
    if (travelerCount > 0) {
      summary.push(`${travelerCount} guest${travelerCount === 1 ? "" : "s"}`);
    }
    if (guests.infants > 0) {
      summary.push(`${guests.infants} infant${guests.infants === 1 ? "" : "s"}`);
    }
    if (guests.pets > 0) {
      summary.push(`${guests.pets} pet${guests.pets === 1 ? "" : "s"}`);
    }

    return summary.join(", ");
  }, [guests]);

  const whereSummary = useMemo(() => {
    if (selectedCities.length === 0) {
      return "Search destinations";
    }

    if (selectedCities.length === 1) {
      return selectedCities[0];
    }

    return `${selectedCities.length} cities selected`;
  }, [selectedCities]);

  useEffect(() => {
    const citiesFromQuery = searchParams.get("cities");
    if (!citiesFromQuery) {
      setSelectedCities([]);
      return;
    }

    setSelectedCities(
      citiesFromQuery
        .split(",")
        .map((city) => city.trim())
        .filter(Boolean),
    );
  }, [searchParams]);

  useEffect(() => {
    previousScrollY.current = window.scrollY;
    showRef.current = true;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - previousScrollY.current;

      if (Math.abs(delta) < 6) {
        previousScrollY.current = currentScrollY;
        return;
      }

      if (delta > 0 && currentScrollY > 140 && showRef.current) {
        showRef.current = false;
        setShow(false);
        setActivePanel(null);
      }

      if ((delta < -6 || currentScrollY < 24) && !showRef.current) {
        showRef.current = true;
        setShow(true);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setActivePanel(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateGuest = (key: keyof typeof guests, increment: boolean) => {
    setGuests((previous) => {
      const nextValue = increment ? previous[key] + 1 : Math.max(0, previous[key] - 1);
      return { ...previous, [key]: nextValue };
    });
  };

  const toggleCity = (city: string) => {
    setSelectedCities((previous) => {
      const next = previous.includes(city)
        ? previous.filter((item) => item !== city)
        : [...previous, city];

      const params = new URLSearchParams(searchParams.toString());
      if (next.length > 0) {
        params.set("cities", next.join(","));
      } else {
        params.delete("cities");
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });

      return next;
    });
  };

  if (!show) return null;

  return (
    <div className="sticky top-[72px] z-40 border-b border-gray-200 bg-[#f5f5f5] px-4 py-4 md:px-8 md:py-6">
      <div ref={containerRef} className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto flex w-full max-w-6xl items-center rounded-full border border-gray-300 bg-white px-4 py-3 shadow-md md:px-8 md:py-5">
          <button
            type="button"
            onClick={() => setActivePanel((panel) => (panel === "where" ? null : "where"))}
            className="flex min-w-0 flex-1 flex-col text-left"
          >
            <span className="text-lg font-semibold text-gray-900">Where</span>
            <span className="truncate text-lg text-gray-500">{whereSummary}</span>
          </button>

          <span className="mx-4 hidden h-12 w-px bg-gray-200 md:block" />

          <button
            type="button"
            onClick={() => setActivePanel((panel) => (panel === "when" ? null : "when"))}
            className="flex min-w-0 flex-1 flex-col text-left"
          >
            <span className="text-lg font-semibold text-gray-900">When</span>
            <span className="truncate text-lg text-gray-500">{selectedDate || "Add dates"}</span>
          </button>

          <span className="mx-4 hidden h-12 w-px bg-gray-200 md:block" />

          <button
            type="button"
            onClick={() => setActivePanel((panel) => (panel === "who" ? null : "who"))}
            className="flex min-w-0 flex-1 flex-col text-left"
          >
            <span className="text-lg font-semibold text-gray-900">Who</span>
            <span className="truncate text-lg text-gray-500">{guestSummary}</span>
          </button>

          <button
            type="button"
            aria-label="Search"
            className="ml-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-rose-600 text-white transition hover:bg-rose-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
          </button>
        </div>

        {activePanel === "where" && (
          <div className="mx-auto mt-3 w-full max-w-3xl rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">Choose cities</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCities([]);
                  const params = new URLSearchParams(searchParams.toString());
                  params.delete("cities");
                  const query = params.toString();
                  router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
                }}
                className="text-sm font-medium text-rose-600 hover:text-rose-700"
              >
                Clear
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {cityOptions.map((city) => (
                <label
                  key={city}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-left text-gray-800 transition hover:border-rose-300 hover:bg-rose-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedCities.includes(city)}
                    onChange={() => toggleCity(city)}
                    className="h-4 w-4 accent-rose-600"
                  />
                  {city}
                </label>
              ))}
            </div>
          </div>
        )}

        {activePanel === "when" && (
          <div className="mx-auto mt-3 w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-600">Select check-in date</p>
            <input
              type="date"
              value={selectedDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(event) => {
                setSelectedDate(event.target.value);
                setActivePanel(null);
              }}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg text-gray-700 outline-none focus:border-rose-400"
            />
          </div>
        )}

        {activePanel === "who" && (
          <div className="mx-auto mt-3 w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-600">Add guests</p>
            <div className="space-y-3">
              {[
                { key: "adults", label: "Adults", subtitle: "Ages 13+" },
                { key: "children", label: "Children", subtitle: "Ages 2-12" },
                { key: "infants", label: "Infants", subtitle: "Ages 0-2" },
                { key: "pets", label: "Pets", subtitle: "Bringing a service animal?" },
              ].map((group) => {
                const value = guests[group.key as keyof typeof guests];
                return (
                  <div key={group.key} className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
                    <div>
                      <p className="font-semibold text-gray-900">{group.label}</p>
                      <p className="text-sm text-gray-500">{group.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateGuest(group.key as keyof typeof guests, false)}
                        className="h-8 w-8 rounded-full border border-gray-300 text-lg text-gray-700 transition hover:border-gray-500"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-semibold text-gray-900">{value}</span>
                      <button
                        type="button"
                        onClick={() => updateGuest(group.key as keyof typeof guests, true)}
                        className="h-8 w-8 rounded-full border border-gray-300 text-lg text-gray-700 transition hover:border-gray-500"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

const popularHomes = [
  { id: "1", city: "Vernon", title: "Apartment in Vernon", price: 683, nights: 2, rating: 5.0, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  { id: "2", city: "Los Angeles", title: "Home in Los Angeles", price: 1186, nights: 2, rating: 4.99, image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80" },
  { id: "3", city: "Topanga", title: "Home in Topanga", price: 2309, nights: 2, rating: 4.93, image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" },
  { id: "4", city: "Los Angeles", title: "Guesthouse in Los Angeles", price: 525, nights: 2, rating: 4.97, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" },
  { id: "5", city: "Los Angeles", title: "Guesthouse in Los Angeles", price: 417, nights: 2, rating: 4.99, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
];

export default function Home() {
  const searchParams = useSearchParams();
  const selectedCities = useMemo(() => {
    const raw = searchParams.get("cities");
    if (!raw) return [] as string[];
    return raw
      .split(",")
      .map((city) => city.trim())
      .filter(Boolean);
  }, [searchParams]);

  const filteredHomes = useMemo(() => {
    if (selectedCities.length === 0) {
      return popularHomes;
    }

    return popularHomes.filter((home) => selectedCities.includes(home.city));
  }, [selectedCities]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
        {/* Popular Homes Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular homes in Los Angeles</h2>
          {selectedCities.length > 0 && (
            <p className="mb-4 text-sm text-gray-600">Filtered by: {selectedCities.join(", ")}</p>
          )}
          <div className="flex gap-4 overflow-x-auto">
            {filteredHomes.map((home) => (
              <div key={home.id} className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden">
                <img src={home.image} alt={home.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="text-sm font-semibold text-gray-500">Guest favorite</div>
                  <h3 className="text-lg font-bold mt-1">{home.title}</h3>
                  <p className="text-gray-600">${home.price} for {home.nights} nights • ⭐ {home.rating}</p>
                </div>
              </div>
            ))}
            {filteredHomes.length > 0 && (
              <div className="min-w-[250px] flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                <div className="text-center">
                  <img src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=200&q=80" alt="See all" className="w-20 h-20 mx-auto mb-2" />
                  <div className="text-lg font-bold">See all</div>
                </div>
              </div>
            )}
            {filteredHomes.length === 0 && (
              <div className="rounded-lg bg-white px-6 py-8 text-gray-600 shadow-md">No listings found for selected cities.</div>
            )}
          </div>
        </section>

        {/* Great Deals Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Great deals on hotels</h2>
          <p className="text-gray-600">Get Airbnb credit when you book a featured hotel</p>
        </section>
      </main>
    </div>
  );
}
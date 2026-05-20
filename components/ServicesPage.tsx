"use client";
import { useEffect, useState } from 'react';
import Loading from './Loading';

const mockServices = [
  {
    id: '1',
    name: 'Barber',
    image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '2',
    name: 'Massage',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: '3',
    name: 'Chef',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80',
  },
];

export default function ServicesPage({ lang = "en", t = {} }: { lang?: string; t?: Record<string, string> }) {
  // Translated mock data
  const translatedServices = [
    {
      id: '1',
      name: t.barber || 'Barber',
      image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: '2',
      name: t.massage || 'Massage',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: '3',
      name: t.chef || 'Chef',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const [services, setServices] = useState<typeof translatedServices>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setServices(translatedServices);
      setLoading(false);
    }, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t.services || "Services"}</h1>
      {loading ? (
        <Loading t={t} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
              <img src={service.image} alt={service.name} className="w-16 h-16 object-cover rounded-full mb-2 shadow border-2 border-indigo-200" />
              <div className="font-extrabold text-lg sm:text-xl text-indigo-700 mb-1 tracking-wide drop-shadow-md text-center">
                {service.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

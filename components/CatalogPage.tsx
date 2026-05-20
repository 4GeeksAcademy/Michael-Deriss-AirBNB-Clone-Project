"use client";
import { useEffect, useState } from 'react';
import { Listing } from '../types';
import Loading from './Loading';
import CatalogSort from './CatalogSort';

const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Landmark Tour',
    price: 120,
    category: 'Landmarks',
    image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2',
    title: 'Outdoor Adventure',
    price: 80,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '3',
    title: 'Museum Visit',
    price: 60,
    category: 'Museums',
    image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=900&q=80',
  },
];

export default function CatalogPage({ lang = "en", t = {} }: { lang?: string; t?: Record<string, string> }) {
  const [listings, setListings] = useState<Listing[]>([]);
  const [sortOrder, setSortOrder] = useState<'high' | 'low'>('low');
  const [loading, setLoading] = useState(true);

  // Translated mock data
  const translatedListings = [
    {
      id: '1',
      title: t.landmarkTour || 'Landmark Tour',
      price: 120,
      category: t.landmarks || 'Landmarks',
      image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '2',
      title: t.outdoorAdventure || 'Outdoor Adventure',
      price: 80,
      category: t.outdoor || 'Outdoor',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '3',
      title: t.museumVisit || 'Museum Visit',
      price: 60,
      category: t.museums || 'Museums',
      image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=900&q=80',
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setListings(translatedListings);
      setLoading(false);
    }, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const sortedListings = [...listings].sort((a, b) =>
    sortOrder === 'high' ? b.price - a.price : a.price - b.price
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t.catalogTitle || "Experiences Catalog"}</h1>
      <CatalogSort sortOrder={sortOrder} setSortOrder={setSortOrder} t={t} />
      {loading ? (
        <Loading t={t} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {sortedListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
              <img src={listing.image} alt={listing.title} className="w-24 h-24 object-cover rounded-lg mb-2 shadow-md border-2 border-gray-200" />
              <div className="font-extrabold text-lg sm:text-xl text-indigo-700 mb-1 tracking-wide drop-shadow-md text-center">
                {listing.title}
              </div>
              <div className="text-gray-500 italic text-sm mb-1 text-center">{listing.category}</div>
              <div className="text-red-500 font-bold text-base">${listing.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

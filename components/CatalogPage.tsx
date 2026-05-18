import { useEffect, useState } from 'react';
import { Listing } from '../types';
import Loading from './Loading';
import CatalogSort from './CatalogSort';

const mockListings: Listing[] = [
  { id: '1', title: 'Landmark Tour', price: 120, category: 'Landmarks', image: '/landmark.jpg' },
  { id: '2', title: 'Outdoor Adventure', price: 80, category: 'Outdoor', image: '/outdoor.jpg' },
  { id: '3', title: 'Museum Visit', price: 60, category: 'Museums', image: '/museum.jpg' },
];

export default function CatalogPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [sortOrder, setSortOrder] = useState<'high' | 'low'>('low');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setListings(mockListings);
      setLoading(false);
    }, 800);
  }, []);

  const sortedListings = [...listings].sort((a, b) =>
    sortOrder === 'high' ? b.price - a.price : a.price - b.price
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Experiences Catalog</h1>
      <CatalogSort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {sortedListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded shadow p-4">
              <img src={listing.image} alt={listing.title} className="w-full h-32 object-cover rounded mb-2" />
              <div className="font-semibold">{listing.title}</div>
              <div className="text-gray-500">{listing.category}</div>
              <div className="text-red-500 font-bold">${listing.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

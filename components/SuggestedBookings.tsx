import { Listing } from '../types';

const suggested: Listing[] = [
  { id: '1', title: 'Beachside Villa', price: 200, category: 'Beach', image: '/beach.jpg' },
  { id: '2', title: 'Mountain Cabin', price: 120, category: 'Mountain', image: '/mountain.jpg' },
  { id: '3', title: 'City Loft', price: 180, category: 'City', image: '/city.jpg' },
];

export default function SuggestedBookings() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Suggested Bookings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {suggested.map((item) => (
          <div key={item.id} className="bg-white rounded shadow p-4">
            <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold">{item.title}</div>
            <div className="text-gray-500">{item.category}</div>
            <div className="text-red-500 font-bold">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

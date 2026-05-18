import Link from 'next/link';

const suggested = [
  { id: '1', title: 'Beachside Villa', price: 200, category: 'Beach', image: '/beach.jpg' },
  { id: '2', title: 'Mountain Cabin', price: 120, category: 'Mountain', image: '/mountain.jpg' },
  { id: '3', title: 'City Loft', price: 180, category: 'City', image: '/city.jpg' },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center mt-4 mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to AirBNB Clone</h1>
        <div className="flex gap-4 text-lg">
          <Link href="/" className="hover:text-red-500">Home</Link>
          <Link href="/catalog" className="hover:text-red-500">Experiences</Link>
          <Link href="/services" className="hover:text-red-500">Services</Link>
        </div>
      </div>
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
    </div>
  );
}
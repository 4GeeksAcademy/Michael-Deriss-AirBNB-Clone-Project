import Link from 'next/link';

const suggested = [
  { id: '1', title: 'Beachside Villa', price: 200, category: 'Beach', image: '/beach.jpg' },
  { id: '2', title: 'Mountain Cabin', price: 120, category: 'Mountain', image: '/mountain.jpg' },
  { id: '3', title: 'City Loft', price: 180, category: 'City', image: '/city.jpg' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-4 py-2 max-w-5xl mx-auto">
          <Link href="/" className="flex items-center gap-1 text-xl font-bold text-red-500">
            <span className="w-5 h-5 inline-block">
              {/* Red triangle logo */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,2 18,18 2,18" fill="#EF4444" />
              </svg>
            </span>
            AirBNB
          </Link>
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-red-500">Home</Link>
            <Link href="/catalog" className="hover:text-red-500">Experiences</Link>
            <Link href="/services" className="hover:text-red-500">Services</Link>
          </div>
        </div>
        {/* Sticky 2nd nav row */}
        <div className="flex justify-center bg-white border-t border-b py-2 sticky top-[56px] z-40">
          <div className="flex gap-2 w-full max-w-2xl items-center">
            <button className="flex-1 px-3 py-2 rounded-full hover:bg-gray-100 text-left border">Where</button>
            <button className="flex-1 px-3 py-2 rounded-full hover:bg-gray-100 text-left border">When</button>
            <button className="flex-1 px-3 py-2 rounded-full hover:bg-gray-100 text-left border">Who</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full font-semibold ml-2">Search</button>
          </div>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto px-2 pt-8 space-y-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to AirBNB Clone</h1>
          <div className="flex gap-4 text-lg md:hidden mt-2">
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
      </main>
    </div>
  );
}
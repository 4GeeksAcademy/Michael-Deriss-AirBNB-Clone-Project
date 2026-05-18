import Link from 'next/link';

const popularHomes = [
  { id: '1', title: 'Apartment in Vernon', price: 683, nights: 2, rating: 5.0, image: '/vernon.jpg' },
  { id: '2', title: 'Home in Los Angeles', price: 1186, nights: 2, rating: 4.99, image: '/la_home.jpg' },
  { id: '3', title: 'Home in Topanga', price: 2309, nights: 2, rating: 4.93, image: '/topanga.jpg' },
  { id: '4', title: 'Guesthouse in Los Angeles', price: 525, nights: 2, rating: 4.97, image: '/guesthouse.jpg' },
  { id: '5', title: 'Guesthouse in Los Angeles', price: 417, nights: 2, rating: 4.99, image: '/guesthouse2.jpg' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 pt-12 space-y-12">
        {/* Popular Homes Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular homes in Los Angeles</h2>
          <div className="flex gap-4 overflow-x-auto">
            {popularHomes.map((home) => (
              <div key={home.id} className="min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden">
                <img src={home.image} alt={home.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="text-sm font-semibold text-gray-500">Guest favorite</div>
                  <h3 className="text-lg font-bold mt-1">{home.title}</h3>
                  <p className="text-gray-600">${home.price} for {home.nights} nights • ⭐ {home.rating}</p>
                </div>
              </div>
            ))}
            <div className="min-w-[250px] flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
              <div className="text-center">
                <img src="/see_all.jpg" alt="See all" className="w-20 h-20 mx-auto mb-2" />
                <div className="text-lg font-bold">See all</div>
              </div>
            </div>
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
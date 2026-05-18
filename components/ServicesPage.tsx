import { useEffect, useState } from 'react';
import Loading from './Loading';

const mockServices = [
  { id: '1', name: 'Barber', image: '/barber.jpg' },
  { id: '2', name: 'Massage', image: '/massage.jpg' },
  { id: '3', name: 'Chef', image: '/chef.jpg' },
];

export default function ServicesPage() {
  const [services, setServices] = useState<typeof mockServices>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setServices(mockServices);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
              <img src={service.image} alt={service.name} className="w-20 h-20 object-cover rounded-full mb-2" />
              <div className="font-semibold">{service.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

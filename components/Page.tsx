import Link from 'next/link';
import SuggestedBookings from '../components/SuggestedBookings';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center mt-4 mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to AirBNB Clone</h1>
        <div className="flex gap-4 text-lg">
          <Link href="/catalog" className="hover:text-red-500">Experiences</Link>
          <Link href="/services" className="hover:text-red-500">Services</Link>
        </div>
      </div>
      <SuggestedBookings />
    </div>
  );
}
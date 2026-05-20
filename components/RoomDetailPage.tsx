"use client";
import { useEffect, useState } from 'react';
import { Room } from '../types';
import Loading from './Loading';

const mockRoom: Room = {
  id: '1',
  title: 'Cozy Apartment in City Center',
  price: 150,
  stars: 4.8,
  reviews: 120,
  location: 'New York, NY',
  images: ['/room1.jpg', '/room2.jpg', '/room3.jpg'],
  host: { name: 'Alice', avatar: '/host.jpg' },
  amenities: ['WiFi', 'Kitchen', 'Washer', 'Air conditioning'],
  description: 'A beautiful and cozy apartment in the heart of the city. Close to all attractions.',
};

type Props = { roomId: string };

export default function RoomDetailPage({ roomId, lang = "en", t = {} }: { roomId: string; lang?: string; t?: Record<string, string> }) {
  // Translated mock data
  const translatedRoom: Room = {
    id: '1',
    title: t.cozyApt || 'Cozy Apartment in City Center',
    price: 150,
    stars: 4.8,
    reviews: 120,
    location: t.nyc || 'New York, NY',
    images: ['/room1.jpg', '/room2.jpg', '/room3.jpg'],
    host: { name: t.alice || 'Alice', avatar: '/host.jpg' },
    amenities: [t.wifi || 'WiFi', t.kitchen || 'Kitchen', t.washer || 'Washer', t.ac || 'Air conditioning'],
    description: t.aptDesc || 'A beautiful and cozy apartment in the heart of the city. Close to all attractions.',
  };

  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setRoom(translatedRoom);
      setLoading(false);
    }, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  if (loading || !room) return <Loading t={t} />;

  return (
    <div className="space-y-6">
      {/* Photo Gallery */}
      <div className="relative">
        <img src={room.images[photoIndex]} alt="Room" className="w-full h-64 object-cover rounded" />
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
          onClick={() => setPhotoIndex((i) => (i === 0 ? room.images.length - 1 : i - 1))}
        >
          ◀
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
          onClick={() => setPhotoIndex((i) => (i === room.images.length - 1 ? 0 : i + 1))}
        >
          ▶
        </button>
      </div>
      {/* Listing Header */}
      <div>
        <h1 className="text-2xl font-bold">{room.title}</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <span>⭐ {room.stars}</span>
          <span>({room.reviews} {t.reviews || 'reviews'})</span>
          <span>· {room.location}</span>
        </div>
      </div>
      {/* Host Info */}
      <div className="flex items-center gap-3">
        <img src={room.host.avatar} alt={room.host.name} className="w-12 h-12 rounded-full" />
        <div>
          <div className="font-semibold">{t.hostedBy || 'Hosted by'} {room.host.name}</div>
        </div>
      </div>
      {/* Amenities */}
      <div>
        <div className="font-semibold mb-1">{t.amenities || 'Amenities'}</div>
        <ul className="flex flex-wrap gap-2">
          {room.amenities.map((a) => (
            <li key={a} className="bg-gray-100 px-2 py-1 rounded text-sm">{a}</li>
          ))}
        </ul>
      </div>
      {/* Booking Card */}
      <div className="bg-white rounded shadow p-4 max-w-xs">
        <div className="text-xl font-bold text-red-500 mb-2">${room.price} <span className="text-base font-normal text-gray-600">/ night</span></div>
        <div className="mb-2">{t.guests || 'Guests'}:
          <button className="ml-2 px-2" onClick={() => setGuestCount((c) => Math.max(1, c - 1))}>-</button>
          <span className="mx-2">{guestCount}</span>
          <button className="px-2" onClick={() => setGuestCount((c) => c + 1)}>+</button>
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded font-semibold">{t.bookNow || 'Book Now'}</button>
      </div>
      {/* Description */}
      <div>
        <div className="font-semibold mb-1">{t.about || 'About this place'}</div>
        <div>{room.description}</div>
      </div>
    </div>
  );
}

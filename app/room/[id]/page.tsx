import RoomDetailPage from '../../../components/RoomDetailPage';
import { useParams } from 'next/navigation';

export default function Page() {
  // Next.js 16: useParams for dynamic route
  const params = useParams();
  return <RoomDetailPage roomId={params?.id as string} />;
}

import RoomDetailPage from '../../../components/RoomDetailPage';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <RoomDetailPage roomId={id} />;
}

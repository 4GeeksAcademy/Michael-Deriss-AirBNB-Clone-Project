import RoomDetailPage from '../../../components/RoomDetailPage';

type PageProps = {
  params: Promise<{ id: string }>;
  lang?: string;
  t?: Record<string, string>;
};

export default async function Page({ params, lang, t }: PageProps) {
  const { id } = await params;
  return <RoomDetailPage roomId={id} lang={lang} t={t} />;
}

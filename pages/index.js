import useSWR from 'swr'
import ArtPieces from '@/components/ArtPieces';
import Spotlight from '@/components/Spotlight';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SpotlightPage() {
  const { data, error, isLoading} = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;


console.log(data)
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}


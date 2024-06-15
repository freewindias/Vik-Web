import Link from "next/link";
import { simplifiedArt } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getData() {
    const query = `*[_type == 'art' ][0...4] | order(_createdAt desc) 
    {
      _id,
      title,
      image,
      'slug': slug.current,
      'collectionName': collection->title,
      }`;

    const data = await client.fetch(query);

return data;
}

export const revalidate = 30;

export default async function Newest() {
  const data: simplifiedArt[] = await getData();
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-500">
          Recent Artworks
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((art) => (
            <Link key={art._id} href={`/art/${art.slug}`}>
              <div className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={art.image}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{art.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {art.collectionName}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

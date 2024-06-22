import { simplifiedArt } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { BackArrowIcon } from '@/app/components/Icons';


export async function getArtByCollection(collection: any) {
  const query = `*[_type == "art" && references(*[_type == "collection" && slug.current == "${collection}" ]._id)]
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

interface Params {
  params: {
    slug: string;
  }
}

export const revalidate = 10;


const page = async ({ params }: Params) => {
  const data: simplifiedArt[] = await getArtByCollection(params.slug);
  return (
    <>
      <div className="flex items-center mt-6">
        <Link href="/collection">
          <div className="w-10 h-10 mr-2">
            <BackArrowIcon />
          </div>
        </Link>
        <h1 className="text-3xl font-bold">{data[0]?.collectionName}</h1>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((art) => (
          <div key={art._id} className="group relative">
            <Link key={art._id} href={`/art/${art.slug}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default page

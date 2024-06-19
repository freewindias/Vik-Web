import React from "react";
import { client } from "../lib/sanity";
import { allcollection } from "../interface";
import Link from "next/link";
import Newest from "../components/Newest";
import { Card, CardContent } from "@/components/ui/card";

async function getAllCollection() {
    const query = `
        *[_type == "collection"]{
            _id,
                title,
                slug,
        }`;
    
    const data = client.fetch(query);

    return data;
}

export const revalidate = 10;

interface Params {
  params: {
    slug: string;
  }
}

export default async function CollectionPage({ params }: Params) {
  const data: allcollection[] = await getAllCollection();
  return (
    
    <div>
      <Newest/>
      <h1 className="text-7xl text-center font-bold tracking-tight text-gray-500">Collection</h1>
      {/* {data?.length > 0 &&
        data?.map((data) => (
          <div key={data?._id} >
            <div className="">
              <Link href={`/collection/${data.slug.current}`}>
              <div className="mt-6 gap-x-6 gap-y-10  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div className="aspect-square w-full overflow-hidden rounded-md  items-center bg-gray-200 group-hover:opacity-75 lg:h-80 flex itms-center justify-center text-9xl">
                    {data.title}
                  </div>
              </div>
              </Link>
            </div>
          </div>
        ))} */}
      
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-5 gap-5">
        {data.map((collection, idx) => (
          
            <Card key={idx} className="">
              <Link href={`/collection/${collection.slug.current}`}>
                <CardContent className="mt-5 flex items-center justify-center h-80">
                    <h3 className=" text-4xl line-clamp-2">{collection.title}</h3>                
                </CardContent>
              </Link>                
          </Card>
          
        ))}
      </div>
    </div>
  );
}

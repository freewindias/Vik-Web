import { BackArrowIcon } from "@/app/components/Icons";
import { artPage } from "@/app/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";


async function getArtPage(slug : string) {
  const query = `
  *[_type == "art" && slug.current == '${slug}']{
  "currentSlug": slug.current,
    title,
    content,
    image,
    collection -> {
      title,
      slug,
    },
  }[0]
  `;
  
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 30;

interface Params {
  params: {
    slug: string;
  }
}




export default async function ArtPage({
  params,
}: Params){
  const data: artPage = await getArtPage(params.slug);
  return (
    <div className="items-center">
      <h1>
        <div className="flex items-center">
          <Link href="/collection">
            <div className="w-10 h-10 mr-2">
              <BackArrowIcon />
            </div>
          </Link>
          <span className="block text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>
        </div>
        <Link href={`/collection/${data.collection.slug.current}`}>
          <span className="mt-2 ml-12 block text-2xl  leading-8 tracking-tight sm:text-2xl">
            {data.collection.title}
          </span>
        </Link>
      </h1>

      <div className="flex gap-8">
        <Image
          src={data.image}
          alt="art image"
          width={600}
          height={600}
          priority
          className="rounded-lg mt-8 border"
        />

        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary font-body">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}

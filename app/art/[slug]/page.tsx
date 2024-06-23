import { BackArrowIcon } from "@/app/components/Icons";
import { artPage } from "@/app/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon, MailOpenIcon } from "lucide-react";
import { BuildingIcon } from "lucide-react";
import WhatsAppButton from "@/app/components/whatsappbutton";

export async function getArtPage(slug: string) {
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

export const revalidate = 10;

interface Params {
  params: {
    slug: string;
  };
}

export default async function ArtPage({ params }: Params) {
  const data: artPage = await getArtPage(params.slug);
  const fullName = String.raw`Hello, Vikrant, Im interested to discuss about > ${data.title} <!`;
  const mailtoLink = `mailto:${"info@rodias.in"}?subject=${"BUY REQUEST - "}${encodeURIComponent(data.title)}&body=${encodeURIComponent(data.currentSlug)}`;

  return (
    <div className="items-center mt-6 mb-6">
      <h1>
        <div className="flex items-center">
          {"["}
          <Link href="/collection">
            {/* <div className="w-10 h-10 mr-2"></div> */}
            <BuildingIcon />
          </Link>
          {/* <span className="block text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span> */}
          {"]              / "}

          <Link href={`/collection/${data.collection.slug.current}`}>
            <span className="block underline text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
              {"/"}
              {data.collection.title}
              {"/"}
            </span>
          </Link>
        </div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Image
          src={data.image}
          alt="art image"
          width={600}
          height={600}
          priority
          className="rounded-lg mt-8 border"
        />

        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary font-body">
          <span className="block center text-3xl mb-3 leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>
          <PortableText value={data.content} />
          <br></br>
          <div className="flex gap-4">
            Check Availability :{" "}
            <a className="form-button" href={mailtoLink}>
              <MailOpenIcon />
            </a>
            /
            <span className="w-7 h-7 -mt-1">
              <WhatsAppButton phoneNumber="+919157179157" message={fullName} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

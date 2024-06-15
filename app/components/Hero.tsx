import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

async function getData() {
    const query = `
    *[_type == 'heroImage']
    {
        heroUrl,
    }[0]
    `;

    const query1 = `*[_type == 'heroImage']
    {
        heroUrl,
        HerroImage,
    }`;

    const data = await client.fetch(query)
    const data1 = await client.fetch(query1)

    return data;
    return data1;
}

export const revalidate = 30;

export default async function Hero() {
    const data = await getData()
    const data1 = await getData()
return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="flex w-full flex-col justify-center items-center">
                <div className="overflow-hidden rounded-lg shadow-xl mb-10">
                    <Image 
                    src={data.heroUrl}
                    alt="Hero Image"
                    className="h-full w-full object-cover object-center"
                    width={1000}
                    height={0}
                    priority/>
                </div>
                <div>
                    <h1>secdosdsdnd div</h1>
                    <p>{data.heroUrl ?data.heroUrl:'no data found'}</p>
                </div>
            </div>
        </div>
    </section>
); 
}
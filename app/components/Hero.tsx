import Image from "next/image";
import { client } from "../lib/sanity";


async function getData() {
    const query = `
    *[_type == 'heroImage']
    {
        heroUrl,
    }[0]
    `;

    const data = await client.fetch(query)

    return data;
}

export const revalidate = 30;

export default async function Hero() {
    const data = await getData()
return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="flex w-full flex-col justify-center items-center">
                <div className=" mt-7 overflow-hidden rounded-lg shadow-xl mb-10">
                    <Image 
                    src={data.heroUrl}
                    alt="Hero Image"
                    className="h-full w-full object-cover object-center"
                    width={1000}
                    height={0}
                    priority/>
                </div>
                <div>
                    <pre className="font-cap">  caption  </pre>
                </div>
            </div>
        </div>
    </section>
); 
}
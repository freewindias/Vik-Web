import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client =  createClient({
    projectId: "32guu6ki",
    dataset: "production",
    apiVersion: "2023-03-07",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}
export interface simplifiedArt {
  map(arg0: (art: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
  _id: string;
  title: string;
  collectionName: string;
  imageUrl: string;
  slug: string  
}

export interface allcollection {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface artPage{
  currentSlug: string;
  title: string;
  content: any;
  image: any;
  collection:{
    title: string;
    slug: { current: string };
  };
}

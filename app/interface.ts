export interface simplifiedArt {
  _id: string;
  title: string;
  collectionName: string;
  image: string;
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

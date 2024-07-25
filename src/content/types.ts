export type Image = {
  src: any;
  alt: string;
};

export type Link = {
  href: string;
  text: string;
};


export type WithId<T> = T & {
  id: string;
};

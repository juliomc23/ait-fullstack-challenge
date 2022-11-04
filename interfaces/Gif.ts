export interface ServerResponse {
  data: Gif[];
}

export interface Gif {
  type: string;
  id: string;
  images: {
    original: {
      url: string;
    };
  };
}

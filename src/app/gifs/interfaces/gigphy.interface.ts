export interface GifPhyResponse {
    data:GifPhyItem[];
}

export interface GifPhyItem{
    id: string;
    title: string;
    images: GifPhyImages;
}

interface GifPhyImages {
    original: GifPhyItemImageOriginal;
}

interface GifPhyItemImageOriginal {
    url: string;
}
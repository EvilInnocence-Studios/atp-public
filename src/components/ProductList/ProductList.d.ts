import { Index } from "ts-functional/dist/types";

export declare interface IProductListProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IProductListInputProps {

}

export type ProductListProps = IProductListInputProps & IProductListProps;

// Algorithm Types
export declare interface IPoint {
    x: number;
    y: number;
}

export declare interface IElement {
    origin: IPoint | null;
    size: IPoint;
}

export declare interface IImage extends IElement {
    src: string;
    title: string;
    url: string;
    description: string;
}

export declare interface IPlacedImage extends IImage {
    origin: IPoint;
}

export declare type ImageList = IImage[];
export declare type PlacedImageList = IPlacedImage[];

export declare interface ISlot extends IElement {
    origin: IPoint;
}

export declare type SlotList = ISlot[];

export declare interface IImageGroup {
    size: IPoint;
    images: ImageList;
    slots: SlotList;
}

export declare type ImageGroups = Index<IImageGroup>;
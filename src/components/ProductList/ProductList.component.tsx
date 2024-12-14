import { IPlacedImage, ProductListProps } from "./ProductList.d";
import { arrangeImages, groupImages, imageSize, randomImages } from "./ProductList.helpers";
import styles from './ProductList.module.scss';

export const ProductListComponent = ({}:ProductListProps) => {
    const groupedImages = groupImages(randomImages, {x: 4, y: 3000});
    
    const arrangedImages = arrangeImages(groupedImages);

    const gutterSize = 16;
    return <div className={styles.gallery}>
        {arrangedImages.map((image:IPlacedImage, i:number) => <img
            key={i}
            src={image.src}
            alt={image.title}
            style={{
                top: `${image.origin.y * (imageSize + gutterSize)}px`,
                left: `${image.origin.x * (imageSize + gutterSize)}px`,
                width: `${image.size.x * imageSize + gutterSize * (image.size.x - 1)}px`,
                height: `${image.size.y * imageSize + gutterSize * (image.size.y - 1)}px`
            }}
        />)}
    </div>;
}

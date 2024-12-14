import { createInjector, inject, mergeProps } from "unstateless";
import {ProductListComponent} from "./ProductList.component";
import {IProductListInputProps, ProductListProps, IProductListProps} from "./ProductList.d";

const injectProductListProps = createInjector(({}:IProductListInputProps):IProductListProps => {
    return {};
});

const connect = inject<IProductListInputProps, ProductListProps>(mergeProps(
    injectProductListProps,
));

export const ProductList = connect(ProductListComponent);

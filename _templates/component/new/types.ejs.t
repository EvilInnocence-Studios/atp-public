---
to: src/<%= module %>/components/<%= componentName %>/<%= componentName %>.d.ts
---
export declare interface I<%= componentName %>Props {

}

// What gets passed into the component from the parent as attributes
export declare interface I<%= componentName %>InputProps {
    classes?: any;
}

export type <%= componentName %>Props = I<%= componentName %>InputProps & I<%= componentName %>Props;
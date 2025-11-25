---
to: src/<%= module %>/components/<%= componentName %>/<%= componentName %>.component.tsx
---
import { overridable } from "@core/lib/overridable";
import {<%= componentName %>Props} from "./<%= componentName %>.d";
import styles from './<%= componentName %>.module.scss';

export const <%= componentName %>Component = overridable(({classes = styles}:<%= componentName %>Props) =>
    <div><%= componentName %> component goes here.</div>
);

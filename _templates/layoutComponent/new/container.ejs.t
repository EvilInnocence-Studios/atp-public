---
to: src/<%= module %>/components/<%= componentName %>/<%= componentName %>.container.ts
---
import { createInjector, inject, mergeProps } from "unstateless";
import {<%= componentName %>Component} from "./<%= componentName %>.component";
import {I<%= componentName %>InputProps, <%= componentName %>Props, I<%= componentName %>Props} from "./<%= componentName %>.d";
import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import icon from './icon.svg';
<% if(hasLayoutEditor){ -%>
import { <%= componentName %>LayoutEditor } from "./<%= componentName %>.layout";
<% } -%>
<% if(hasPropEditor){ -%>
import { <%= componentName %>PropEditor } from "./<%= componentName %>.props";
<% } -%>

const inject<%= componentName %>Props = createInjector(({}:I<%= componentName %>InputProps):I<%= componentName %>Props => {
    return {};
});

const connect = inject<I<%= componentName %>InputProps, <%= componentName %>Props>(mergeProps(
    inject<%= componentName %>Props,
));
export const connect<%= componentName %> = connect;

export const <%= componentName %> = withLayoutMetadata(
    overridable<I<%= componentName %>InputProps>(connect(<%= componentName %>Component)),
    {
        name: "<%= componentName %>",
        displayName: "<%= componentName %>",
        category: "",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
<% if(hasLayoutEditor){ -%>
        layoutEditor: <%= componentName %>LayoutEditor,
<% } -%>
<% if(hasPropEditor){ -%>
        propEditor: <%= componentName %>PropEditor,
<% } -%>
    }
);

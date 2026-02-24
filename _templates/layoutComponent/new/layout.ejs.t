---
to: "<%= hasLayoutEditor ? `src/${module}/components/${componentName}/${componentName}.layout.tsx` : `` %>"
---
import { useState } from "react";
import { <%= componentName %>Component } from "./<%= componentName %>.component";
import { connect<%= componentName %> } from "./<%= componentName %>.container";
import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";

export const <%= componentName %>LayoutEditor:LayoutEditor = ({__layoutId, __update, __isSelected, ...props}:ILayoutEditorProps) => {
    const [node, setNode] = useState<HTMLElement | null>(null);
    const <%= componentName %>Orig = connect<%= componentName %>(<%= componentName %>Component);

    return (
        <div ref={setNode} style={{position: 'relative'}}>
             <<%= componentName %>Orig {...props} />
            {__isSelected && (
                <div style={{
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    border: '2px solid blue',
                    pointerEvents: 'none',
                    zIndex: 10
                }}>
                    <span style={{background: 'blue', color: 'white', fontSize: '10px', padding: '2px'}}>Editor Active</span>
                </div>
            )}
        </div>
    );
};

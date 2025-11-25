import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../src');
const outputFile = path.resolve(srcDir, 'config.ts');

const modules = fs.readdirSync(srcDir).filter(dir => {
    const modulePath = path.join(srcDir, dir);
    return fs.statSync(modulePath).isDirectory() && 
           (fs.existsSync(path.join(modulePath, 'index.ts')) || fs.existsSync(path.join(modulePath, 'index.tsx')));
});

const toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

const imports = modules.map(module => `import { module as ${toCamelCase(module)} } from "./${module}";`).join('\n');
const exports = `export const modules = [\n    ${modules.map(module => toCamelCase(module)).join(',\n    ')}\n];`;

const content = `import { makeConfig } from "@core/lib/makeConfig";
import {localConfig} from "./config.local";

${imports}

${exports}

export const config = makeConfig(localConfig.api.baseUrl, modules, "admin");
`;

fs.writeFileSync(outputFile, content);
console.log(`Generated ${outputFile}`);

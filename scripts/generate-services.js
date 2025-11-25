import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../src');
const outputFile = path.resolve(srcDir, 'services.ts');

const modules = fs.readdirSync(srcDir).filter(dir => {
    const modulePath = path.join(srcDir, dir);
    return fs.statSync(modulePath).isDirectory() && 
           fs.existsSync(path.join(modulePath, 'lib/services.ts'));
});

const toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

const imports = [
    'import { IMethods } from "@core/lib/types";',
    ...modules.map(module => `import { ${toCamelCase(module)}Services } from "./${module}/lib/services";`)
].join('\n');

const servicesExport = `export const services = (methods: IMethods) => ({\n    ${modules.map(module => `...${toCamelCase(module)}Services(methods)`).join(',\n    ')}\n});`;

const content = `${imports}\n\n${servicesExport}\n`;

fs.writeFileSync(outputFile, content);
console.log(`Generated ${outputFile}`);

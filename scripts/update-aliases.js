import fs from 'fs';
import path from 'path';

// Update the tsconfig.json file to include aliases for the directories in the src directory
const updateTsConfigAliases = (file) => {
    const tsConfigPath = path.resolve(".", file);
    const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf-8'));
    
    // Dynamically generate the alias paths based on the directories in the src folder
    const srcDir = path.resolve(".", 'src');
    const directories = fs.readdirSync(srcDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    
    // Create aliases for each directory
    const aliases = tsConfig.compilerOptions.paths || {};
    directories.forEach(dir => {
        aliases[`@${dir}`] = [`src/${dir}`];
    });
    
    // Add specific aliases for shared directories and styles
    aliases['@styles'] = ['styles/*'];
    aliases['@config'] = ['src/config'];
    
    // Update the tsconfig.json file with the new paths
    tsConfig.compilerOptions.paths = aliases;
    
    fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
}

const files = [
    'tsconfig.json',
    'tsconfig.node.json',
    'tsconfig.app.json',
];
console.log(`Updating tsconfig aliases`);
files.forEach(file => {
    try {
        updateTsConfigAliases(file);
        console.log(`Updated aliases in ${file}`);
    } catch (error) {
        console.error(`Failed to update aliases in ${file}:`, error);
    }
});

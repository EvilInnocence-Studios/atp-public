import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import fs from 'fs';

// https://vite.dev/config/

// Dynamically generate the alias paths based on the directories in the src folder
// Also include the @styles => styles and @config => src/config aliases
// This configuration allows for cleaner imports in the project, making it easier to manage dependencies and components.
const getAliases = () => {
  // Load the directory list from the src folder
  const srcDir = path.resolve(__dirname, 'src');
  const directories = fs.readdirSync(srcDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  const aliases:{[module:string]: string} = {};
  directories.forEach(dir => {
    aliases[`@${dir}`] = path.resolve(srcDir, dir);
  });
  // Add specific aliases for shared directories and styles
  aliases['@styles'] = path.resolve(__dirname, 'styles');
  aliases['@config'] = path.resolve(__dirname, 'src/config');
  console.log(aliases);
  return aliases;
};

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: getAliases(),
  },
  plugins: [react()],
})

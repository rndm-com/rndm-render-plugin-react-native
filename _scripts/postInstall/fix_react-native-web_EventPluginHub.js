const fs = require('fs');
const Path = require('path');

const current = process.cwd();

const base = [
  'node_modules',
  '@rndm',
  'render-plugin-react-native',
  'node_modules',
  'react-native-web',
];

const suffix = [
  'exports',
  'createElement',
  'index.js',
];

const libs = [
  'cjs',
  'dist',
];

libs.forEach(lib => {
  const path = Path.join(current, ...base, lib, ...suffix);
  if (fs.existsSync(path)) {
    const input = fs.readFileSync(path).toString();
    const output = input.replace(`
EventPluginHub.injection.injectEventPluginsByName`,
      `
EventPluginHub && EventPluginHub.injection.injectEventPluginsByName`);
    fs.writeFileSync(path, output);
  }
});

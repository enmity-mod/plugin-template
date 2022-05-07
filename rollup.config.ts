import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { defineConfig, Plugin } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import json from "@rollup/plugin-json";

import { writeFileSync } from 'fs';

import Manifest from "./src/manifest.json";

const pluginName = Manifest.name;

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: `dist/${pluginName}.js`,
      format: "cjs",
      strict: false
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    esbuild({ minify: true, target: "ES2019" }),
    copyManifest(),
  ]
});

function copyManifest(options = {}): Plugin {
  return {
    name: 'plugin-manifest',
    writeBundle: (err) => {
      writeFileSync(`dist/${pluginName}.json`, JSON.stringify(Manifest, null, "\t"));
    }
  }
};
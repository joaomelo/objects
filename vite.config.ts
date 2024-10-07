import { fileURLToPath, URL } from "node:url";
import { defineConfig, LibraryFormats } from "vite";
import checker from "vite-plugin-checker";
import dts from "vite-plugin-dts";

const pathTo = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig(() => {
  return {
    build: {
      emptyOutDir: true,
      lib: {
        entry: pathTo("./src/index.ts"),
        fileName: "index",
        formats: ["es"] as LibraryFormats[]
      },
      outDir: "dist",
      sourcemap: true,
    },
    plugins: [
      dts({ rollupTypes: true }),
      checker({
        eslint: {
          lintCommand: "eslint",
          useFlatConfig: true
        },
        overlay: {
          initialIsOpen: false
        },
        typescript: true,
      })
    ],
    resolve: {
      alias: {
        "@src": pathTo("./src"),
      },
    },
    test: {
      environment: "node",
      include: ["../**/*.test.js"]
    },
  };
});

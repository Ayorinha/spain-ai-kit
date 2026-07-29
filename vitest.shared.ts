import { configDefaults, defineConfig } from 'vitest/config';

/**
 * Shared vitest config for every workspace package.
 *
 * vitest 4 dropped `**\/dist\/**` from its default `exclude`, so compiled test
 * output (`dist/*.test.js`) gets collected alongside the TypeScript sources it
 * was built from — running every suite twice, the second time against stale
 * build artefacts. Re-adding the exclusion keeps the run scoped to `src/`.
 */
export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, '**/dist/**'],
  },
});

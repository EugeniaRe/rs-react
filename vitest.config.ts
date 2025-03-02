import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    // setupFiles: 'tests/setup.ts',
    exclude: [...configDefaults.exclude, 'src/App.tsx', 'src/main.tsx'],
    coverage: {
      include: ['**/*.tsx'],
      exclude: ['src/App.tsx', 'pages', ...coverageConfigDefaults.exclude],
    },
  },
});

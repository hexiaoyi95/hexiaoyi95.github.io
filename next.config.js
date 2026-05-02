/** @type {import('next').NextConfig} */
const hasConfiguredBasePath = Object.prototype.hasOwnProperty.call(
  process.env,
  'NEXT_PUBLIC_BASE_PATH',
);
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const gitlabProjectBasePath =
  process.env.GITLAB_PAGES === 'true' && process.env.CI_PROJECT_NAME
    ? `/${process.env.CI_PROJECT_NAME}`
    : '';
const rawBasePath = hasConfiguredBasePath ? configuredBasePath : gitlabProjectBasePath;
const basePath = rawBasePath === '/' ? '' : rawBasePath.replace(/\/$/, '');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig 

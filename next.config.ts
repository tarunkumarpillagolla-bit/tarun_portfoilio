import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

// Must match site.repositoryName in src/data/portfolio.ts
// Permanent URL: https://tarunkumarpillagolla-bit.github.io/tarun_portfoilio/
const repositoryName = "tarun_portfoilio";
const basePath = isGithubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: "export" as const } : {}),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

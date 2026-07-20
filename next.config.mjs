// When building for GitHub Pages, the CI workflow sets GITHUB_PAGES=true.
// This keeps the v0 preview and Vercel working normally, while producing a
// static export for GitHub Pages. Because the site is served from a custom
// domain (amy-jiayu-liang.com) at the root, no basePath/assetPrefix is needed.
const isGithubPages = process.env.GITHUB_PAGES === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {}),
}

export default nextConfig

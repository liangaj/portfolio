// When building for GitHub Pages, the CI workflow sets GITHUB_PAGES=true.
// This keeps the v0 preview and Vercel (served at "/") working normally,
// while producing a static export under the repo subpath for GitHub Pages.
const isGithubPages = process.env.GITHUB_PAGES === "true"

// Your repository name. GitHub Pages serves project sites from
// https://<user>.github.io/<repo>/, so assets need this prefix.
const repo = "portfolio"

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
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
      }
    : {}),
}

export default nextConfig

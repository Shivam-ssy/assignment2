/** @type {import('next').NextConfig} */
import path from "path"
const dir=path.dirname("page.js")
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(dir, 'scss')],
      }
};
export default nextConfig;
module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      /* config options here */
      images: {
        domains: ['localhost', 'www.notebookcheck.net', 'http://localhost:8000'],
      },    
    }
    return nextConfig
  }
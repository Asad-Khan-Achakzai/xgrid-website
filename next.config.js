/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'https://purple-cow.xgrid.co',
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name].[hash].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

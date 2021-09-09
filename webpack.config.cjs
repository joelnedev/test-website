const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'PRODUCTION' ? 'production' : 'development',
  entry: './src/app.tsx',
  devtool: 'cheap-module-source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": "defaults"
                }
              ],
              [
                "minify"
              ],
              [
                "@babel/preset-react",
                {
                  "typescript": true,
                  "runtime": "automatic"
                }
              ],
              [
                "@babel/preset-typescript",
                {
                  "isTSX": true,
                  "allExtensions": true,
                  "onlyRemoveTypeImports": true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: 'postcss-loader',
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
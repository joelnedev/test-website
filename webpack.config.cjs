const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'PRODUCTION' ? 'production' : 'development',
  entry: './src/App.tsx',
  devtool: 'cheap-module-source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.css',
      '.html',
      '.js',
      '.wasm'
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true,
    port: 5000
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
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [ 'postcss-loader' ]
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src'),
        use: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
            }
          },
        ],
        type: 'javascript/auto'
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
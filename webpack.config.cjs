const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.tsx',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    client: {
      progress: true
    },
    compress: true,
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
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
        test: /\.css$/,
        use: 'style-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
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
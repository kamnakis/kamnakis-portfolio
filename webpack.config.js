const path = require('path')
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (mode) => {
  const isProduction = mode === 'production'
  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.s?css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPth: '../'
              }
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|pdf)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'assets'
          },

        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: './css/styles.css',
        chunkFilename: './css/styles_id.css'
      })
    ],
    devtool: isProduction ? 'inline-source-map' : 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  }
}
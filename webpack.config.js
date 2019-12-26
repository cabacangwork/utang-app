const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
      publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: ['file-loader']
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: ['url-loader']
          }
        ]
      },
    devServer: {
      contentBase: './',
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ]
  };
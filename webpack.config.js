const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        'js/out.js': './src/main.jsx',
        'css/style.css~': './scss/main.scss'
   },
   output : {
       path: __dirname+'/',
       filename: '[name]'
   },
   devServer: {
      inline: true,
      contentBase: './',
      port: 3001
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2', 'react'] }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })

            },
//            {
//              test: /\.(png|jpg|gif)$/,
//              exclude: /node_modules/,
//              use: [
//                {
//                  loader: 'file-loader',
//                  options: {}
//                }
//              ]
//            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=100000000000&name=./error/[hash].[ext]'
            }
        ]
    },
    plugins: [
       new ExtractTextPlugin('./css/style.css')

   ]
};

// you can 'run' this file by typing: node webpack.config.js
// if you want to see the console.log output below
// entry-point of our application -> output where the output .js file would go
// To view your application in a browser: go to 'indecision-app' directory and type:
// yarn run build (or, latest: yarn run dev-server)
const path = require('path');
const webpack = require('webpack');
)
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// process.env.NODE_ENV Heroku sets this to production by default
process.env.NODE_ENV =  process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV==='test'){
  require('dotenv').config({ path: '.env.test'});
} else if (process.env.NODE_ENV==='development'){
  require('dotenv').config({ path: '.env.development'});
};

console.log(__dirname); // __dirname is full path of current directory

module.exports= (env)=> {
  console.log('env',env);
  const isProduction = env ==='production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

return { // this is a 'node' item, to allow your objects to be exported/seen in another file
  entry:'./src/app.js', // tells webpack where it should start
  output: { // where webpack should output it's working file to
      path: path.join(__dirname,'public','dist'),
      // 
      filename:'bundle.js' // webpack working file
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.s?css$/, //the '?' says that initial 's' is optional. Will allow both .css and .scss files
      use: CSSExtract.extract({
        use: [ 
          {
            loader:'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourdeMap:true
            }
          }
        ]
      })
    }]
  },
  plugins: [
    CSSExtract,
    new webpack.DefindPlugin({
      'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT':JSON.stringify(process.env.FIREBASE_PROJECT),
      'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
    })
  ],
  devtool: isProduction ? 'source-map':'inline-source-map', // this will allow us to see where in our actual source any errors are
  // cheap-module-eval-source-map would get loaded in it's entirety whenever the web site/page was requested.
  // if we're building for production, we'd create the separate file 'source-map' which would only get loaded
  // into the browser if the user brings up the dev tools (hits F12)
  devServer: {
    contentBase: path.join(__dirname,'public'),
    historyApiFallback:true,
    publicPath: '/dist/'
  }
};
};
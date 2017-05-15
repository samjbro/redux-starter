var path = require("path");
var BUILD_DIR = path.resolve(__dirname, "build");
var APP_DIR = path.resolve(__dirname, "src");

var config = {
   entry: [
      APP_DIR + "/index.js",
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/only-dev-server"
   ],
   output: {
      path: BUILD_DIR,
      filename: "bundle.js",
      publicPath: "/"
   },
   module: {
      loaders: [
         {
            loader: "babel-loader",
            test: /\.jsx?/,
            exclude: /node_modules/
         }
      ]
   },
   devServer: {
      port: 3000,
      contentBase: BUILD_DIR,
      hot: true
   }
};

module.exports = config;

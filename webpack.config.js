// 1. Briefly describe what webpack is doing for us (1-3 sentences
//	  Webpack is a module bundler and when it processes our app, it makes a dependency graph that maps out 
//	  every modules we need.
//
// 2. Briefly describe what the entry key is for in the configuration file
//	  An entry key tells webpack which module to use to begin building out 
//    the dependency graph and it will figure out which other modules and libraries it depends on.
//	  
// 3. Briefly describe what the output key is for in the configuration file
//    An output key tells webpack where to put the bundles it creates and how to name these files.
//
// 4. Briefly describe what a loader is and what webpack uses them for
//    A loader processes other types of file and coverts them into valid modules 
//	  that works with our app and is added to the dependency graph.
//
// 5. Briefly describe what the test key inside a specific loader's configuration is for
//	  The test key identifies which files should be transformed.


var path = require('path');

var ENTRY_POINT = path.resolve(__dirname, './src/App.js')

var OUTPUT_PATH = path.resolve(__dirname, './compiled')

var LOADER_OBJECT = {
	test: /.jsx?$/, 
	loader: 'babel-loader', 
	exclude: /node_modules/, 
	query: { 
		presets: ['env', 'react']}
}

module.exports = {
  entry: ENTRY_POINT,
  output: {
    filename: 'bundle.js',
    path: OUTPUT_PATH,
  },
  module: {
    rules: [LOADER_OBJECT]
  },
  devtool: 'source-map'
};
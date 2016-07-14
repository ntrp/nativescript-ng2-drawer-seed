var bundler = require("nativescript-dev-webpack");

var conf = {
    module: {
        loaders: [
            {
                match: /\.html$/,
                loader: 'html'
            }
        ]
    },
    resolve: {
        moduleDirectories: ['node_modules', 'src']
    },
    debug: true
};


var config = bundler.getConfig(conf);
//console.log(config);
module.exports = config;

const path = require("path")

module.exports = {
    entry: path.resolve(__dirname,"src") + "/index.js",
    mode:"development",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: "swc-loader",
                  options: {
                    parseMap: true
                  }
                }
            }
        ]
    }   
}
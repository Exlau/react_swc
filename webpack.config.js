const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                  loader: "swc-loader",
                  options: {
                    parseMap: true
                  }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"public/index.html"
        })
    ]   
}
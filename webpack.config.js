const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "test/test.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            configFile: path.resolve(__dirname, "eslintrc.js")
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "test/index.html")
        })
    ]
};

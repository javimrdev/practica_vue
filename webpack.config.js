const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.m?js/,
                type: "javascript/auto",
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            }
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            services: path.resolve(__dirname, 'src/services/'),
            types: path.resolve(__dirname, 'src/types/'),
            router: path.resolve(__dirname, 'src/router/'),
        },
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        })
    ],
    devServer: {
        liveReload: true
    }
};
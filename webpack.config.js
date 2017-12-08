const path = require('path');
const webpack = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        'react-json-editor': path.resolve(__dirname, 'src/index.ts'),
        'react-json-editor.min': path.resolve(__dirname, 'src/index.ts')
    },
    node: {
        fs: 'empty',
        console: false,
        process: false,
        global: false,
        __filename: false,
        __dirname: false,
        Buffer: false,
        setImmediate: false
    },
    output: {
        library: 'react-json-editor',
        libraryTarget: 'umd',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new UglifyJsPlugin({
            include: /\.min\.js$/
        })
    ],
    devtool: 'source-map',
    externals: {
        'react': {
            root: 'React',
            amd: 'react',
            commonjs: 'react',
            commonjs2: 'react'
        }
    }
}
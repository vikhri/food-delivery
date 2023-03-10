const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : `browserslist`;
const devtool = devMode ? 'source-map' : undefined;


module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'main.[contenthash].js',
        assetModuleFilename: "assets/[name].[ext]"

    },
    plugins: [
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html')
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-mixins'),
                                    require('postcss-preset-env'),
                                    require('postcss-simple-vars'),
                                    require('autoprefixer'),
                                    require('postcss-nested'),
                                    require('postcss-import'),

                                ],
                            }
                        }
                    }
                ],
            },
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: devMode
                    ? []
                    : [
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.9],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                webp: {
                                    quality: 75,
                                },
                            },
                        },
                    ],
                type: 'asset/resource',
            },

        ]
    }
}
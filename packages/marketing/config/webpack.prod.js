const { merge } = require('webpack-merge');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const common = require('./webpack.common');
const packageJson = require('../package.json');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        })
    ]   
});
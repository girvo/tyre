module.exports = {
    entry: ['babel-polyfill', './src/index.tsx'],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
        ]
    }
};

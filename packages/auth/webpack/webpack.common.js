module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx','.ts'],
    },
};

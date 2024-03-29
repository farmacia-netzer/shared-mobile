module.exports = {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.svg'],
                alias: {
                    '#src': ['./'],
                    '^../../(.+)': './src/\\1',
                }
            }
        ],
        'react-native-reanimated/plugin'
    ]
};

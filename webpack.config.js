const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules:[
            // loaders: [{
            //     test: /\.js?$/,
            //     exclude:[ /node_modules/, /.vscode/ ],
            //     loader: 'babel-loader',
            //     query: {
            //         presets: ['env']
            //     }
            // }]
            { 
                test: /\.js?$/,
                // use: 'babel-loader', 
                loader: 'babel-loader', 
                exclude:[ /node_modules/, /.vscode/ ], 
                query: {presets: ['@babel/preset-env']} 
            },
            {
                test: /\.css$/,
                // loader: ['style-loader', 'css-loader'],
                use: ['style-loader', 'css-loader'],
                // exclude:[ /node_modules/, /.vscode/ ]
              }
        ]

    }, 
    mode: 'development'
}
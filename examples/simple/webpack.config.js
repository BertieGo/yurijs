const HtmlWebpackPlugin = require('html-webpack-plugin');
const hmrTemplateLoader = require('../../@yurijs/hmr-template-loader/loader');
const templateLoader = require('../../@yurijs/template-loader/loader')
const path = require('path');

module.exports = (_, argv) => {
  const __DEV__ = argv.mode === 'development';

  return {
    entry: {
      index: './src',
    },
    devtool: __DEV__ ? 'eval-source-map' : false,
    context: __dirname,
    resolve: {
      extensions: ['.template', '.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        crypto: require.resolve('crypto-browserify'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              target: 'es5',
            },
            transpileOnly: true,
            onlyCompileBundledFiles: true,
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.template$/,
          use: __DEV__
            ? [
                {
                  loader: path.resolve(__dirname, '../../@yurijs/hmr-template-loader/loader'),
                },
                {
                  loader: path.resolve(__dirname, '../../@yurijs/template-loader/loader'),
                  options: {
                    defaultNS: '@yurijs/html',
                    styleExtension: '.less',
                    cssModules: true,
                  },
                },
              ]
            : [
                {
                  loader: require.resolve('@yurijs/template-loader'),
                  options: {
                    defaultNS: '@yurijs/html',
                    styleExtension: '.less',
                    cssModules: true,
                  },
                },
              ],
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'less-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
      }),
    ],
    devServer: {
      hot: true,
    },
  };
};

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(import.meta.dirname, 'dist'),  // ✅ Use import.meta.dirname
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
  mode: 'development',
  target: 'web',
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
      crypto: false,
      stream: false,
      buffer: false,
      util: false,
      url: false,
      http: false,
      https: false,
      assert: false,
      constants: false,
      worker_threads: false,
      child_process: false,
      module: false,
      querystring: false,
      tty: false,
      vm: false,
      zlib: false,
      inspector: false,
    },
  },
  ignoreWarnings: [
    /Critical dependency/,
    /Module not found.*uglify-js/,
    /Module not found.*@swc/,
    /Module not found.*esbuild/,
    /Module not found.*cssnano/,
    /Module not found.*csso/,
    /Module not found.*lightningcss/,
    /Module not found.*inspector/,
    /Module not found.*@minify-html/,
  ],
};
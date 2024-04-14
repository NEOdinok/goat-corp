import path from 'path';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import postcssMixins from 'postcss-mixins';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNested from 'postcss-nested';

export default {
  plugins: [
    postcssImport({ path: [path.resolve("./")] }),
    autoprefixer,
    postcssMixins,
    postcssCustomMedia,
    postcssNested,
  ],
};

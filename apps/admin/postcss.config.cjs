module.exports = {
  plugins: {
    'postcss-prefix-selector': {
      includeFiles: ['index.css'],
      prefix: '.admin-mfe',
      transform(prefix, selector, prefixedSelector, filePath, rule) {
        if (selector.match(/^(html|body)/)) {
          return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
        }

        const annotation = rule.prev();
        if (
          annotation?.type === 'comment' &&
          annotation.text.trim() === 'no-prefix'
        ) {
          return selector; // Do not prefix style rules that are preceded by: /* no-prefix */
        }

        return prefixedSelector;
      },
    },
  },
};

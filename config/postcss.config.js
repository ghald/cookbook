const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/core/layouts/**/*.html',
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h3',
        'alert-link',
        ...whitelister([
          
          //'./assets/scss/components/_alerts.scss', //// enlevé avec v.2.03
          // './assets/scss/components/_buttons.scss',
          //'./assets/scss/components/_code.scss', //// enlevé avec v.2.03
          // './assets/scss/components/_syntax.scss',
          './node_modules/@hyas/core/assets/scss/app.scss',
        ]),
      ],
    }),
  ],
}

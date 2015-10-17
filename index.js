'use strict';

module.exports = function(h) {
  return {
    css: function(href) {
      return h('link', {
        rel: 'stylesheet',
        href: href
      });
    },
    js: function(src) {
      return h('script', {
        src: src
      });
    }
  };
};

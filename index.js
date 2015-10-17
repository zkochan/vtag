'use strict';

module.exports = function(h) {
  var vtag = {};

  vtag.css = function(href) {
    return h('link', {
      rel: 'stylesheet',
      href: href
    });
  };

  vtag.css.inline = function(styles) {
    return h('style', { type: 'text/css' }, styles);
  };

  vtag.js = function(src) {
    return h('script', {
      src: src
    });
  };

  vtag.js.async = function(src) {
    return h('script', {
      async: true,
      src: src
    });
  };

  vtag.js.inline = function(code) {
    return h('script', code);
  };

  return vtag;
};

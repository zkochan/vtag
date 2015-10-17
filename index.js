'use strict';

var R = require('ramda');

module.exports = function(h) {
  var vtag = {};
  var scriptTag = R.partial(h, ['script']);
  var metaTag = R.partial(h, ['meta']);

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
    return scriptTag({ src: src });
  };

  vtag.js.async = function(src) {
    return scriptTag({
      async: true,
      src: src
    });
  };

  vtag.js.inline = function(code) {
    return scriptTag(code);
  };

  vtag.meta = metaTag;

  vtag.meta.charset = function(charset) {
    return vtag.meta({
      charset: charset
    });
  };

  return vtag;
};

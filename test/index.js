'use strict';

var h = require('virtual-dom/h');
var vtag = require('../')(h);
var toHTML = require('vdom-to-html');
var expect = require('chai').expect;

describe('vtag', function() {
  describe('css', function() {
    it('should create correct tag', function() {
      var vtree = vtag.css('/foo.css');
      var html = toHTML(vtree);
      expect(html).to.eq('<link rel="stylesheet" href="/foo.css">');
    });
  });

  describe('css inline', function() {
    it('should create correct tag', function() {
      var vtree = vtag.css.inline('body { z-index: 1 }');
      var html = toHTML(vtree);
      expect(html).to.eq('<style type="text/css">body { z-index: 1 }</style>');
    });
  });

  describe('js', function() {
    it('should create correct tag', function() {
      var vtree = vtag.js('/foo.js');
      var html = toHTML(vtree);
      expect(html).to.eq('<script src="/foo.js"></script>');
    });
  });

  describe('js inline', function() {
    it('should create correct tag', function() {
      var vtree = vtag.js.inline('console.log("Hello world!");');
      var html = toHTML(vtree);
      expect(html).to.eq('<script>console.log("Hello world!");</script>');
    });
  });

  describe('js async', function() {
    it('should create correct tag', function() {
      var vtree = vtag.js.async('/foo.js');
      var html = toHTML(vtree);
      expect(html).to.eq('<script async src="/foo.js"></script>');
    });
  });
});

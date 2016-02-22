# vtag

Virtual tags for [virtual-dom](https://github.com/Matt-Esch/virtual-dom/).

[![Dependency Status](https://david-dm.org/zkochan/vtag/status.svg?style=flat)](https://david-dm.org/zkochan/vtag)
[![Build Status](https://travis-ci.org/zkochan/vtag.svg?branch=master)](https://travis-ci.org/zkochan/vtag)
[![npm version](https://badge.fury.io/js/vtag.svg)](http://badge.fury.io/js/vtag)


## Installation

```
npm install --save vtag
```


## Usage

``` js
var h = require('virtual-dom/h');
var vtag = require('vtag')(h);

var vtree = h('html', [
  h('head', [
    vtag.css('/foo.css') // creates <link rel="stylesheet" href="/foo.css">
  ]),
  h('body', [
    vtag.js('/bar.js') // creates <script src="/bar.js"></script>
  ])
]);
```


## License

MIT © [Zoltan Kochan](https://www.kochan.io)

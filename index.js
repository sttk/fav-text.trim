'use strict';

var escape = require('@fav/text.escape').RegExpCharClass;

function trim(source, chars) {
  if (chars == null) {
    return source.trim(chars);
  }

  chars = escape(chars);

  var leadingRe = new RegExp('^[' + chars + ']+');
  var trailingRe = new RegExp('[' + chars + ']+$');

  return source.replace(leadingRe, '').replace(trailingRe, '');
}

module.exports = trim;

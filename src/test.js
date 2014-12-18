var assert = require('assert');

describe('test run?', function() {
  it('they should', function() {
    assert.equal(true, true);
  });
});

describe('understand flowdock messages', function() {
  describe('NOT in a thread', function() {
    it('use the `content` value', function() {
      var content = 'some text';
      assert.equal(parseFlowdockContent(content), content);
    });
  });
  describe('in a thread', function() {
    it('only get the `content.text` value', function() {
      var content = {text: 'some text'};
      assert.equal(parseFlowdockContent(content), content.text);
    });
  });
});

function parseFlowdockContent(flowdockContent) {
  return flowdockContent.text || flowdockContent;
}

describe('parse a message', function() {
  it('simple URL', function() {
    var url = 'https://github.com/gameclosure/webgl-2d';
    var message = "if we ever implement a canvas api, here's a webgl implementation of the canvas apis... " + url + " #kb";
    assert.equal(parseMessage(message).url, url);
  });
  it('URL with hash', function() {
    var url = 'http://www.growhack.com/growth-hacking-slides/#sthash.ZHtJyBvU.dpbs';
    var message = "in case you haven't seen it already: " + url;
    assert.equal(parseMessage(message).url, url);
  });
});

function parseMessage(message) {
  return {url: getUrlFromText(message)};
}

function getUrlFromText(text) {
  return text.match(/\w+:\/\/\S+/);
}
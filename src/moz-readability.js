module.exports = function(RED) {

    const { Readability } = require('@mozilla/readability');
    const createDOMPurify = require('dompurify');
    const { JSDOM } = require('jsdom');

  function mozreadability(config) {
    RED.nodes.createNode(this,config);

    var node = this;

    node.on('input', function(msg, send, done) {
      const html = msg.payload;
      const window = new JSDOM('').window;
      const DOMPurify = createDOMPurify(window);
      const clean = DOMPurify.sanitize(html);
      var doc = new JSDOM(html);
      let reader = new Readability(doc.window.document);

      try {

        var article = reader.parse();

      } catch (err) {
        if (done) {
          // Node-RED 1.0 compatible
          done(err);
        } else {
          // Node-RED 0.x compatible
          node.error(err, msg);
        }
      }

        msg.payload = article;

        send(msg);

        if (done) {
            done();
        }


    });
  }
  RED.nodes.registerType("moz-readability",mozreadability);
};

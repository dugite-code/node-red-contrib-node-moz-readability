# node-red-contrib-node-moz-readability

A Node-RED readability node utilizing the Mozilla [readability](https://github.com/mozilla/readability) lib

# Usage

The input msg.payload should be the HTML to run readability on.

The output payload will have the following properties (if an article was found in the HTML):

  - title: article title;
  - content: HTML string of processed article content;
  - textContent: text content of the article, with all the HTML tags removed;
  - length: length of an article, in characters;
  - excerpt: article description, or short excerpt from the content;
  - byline: author metadata;
  - dir: content direction;
  - siteName: name of the site.
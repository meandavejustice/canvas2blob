# Canvas2Blob

Convert canvas to a file blob.

## usage

``` javascript
var canvas2blob = require('canvas2blob');
var canvasEl = document.getElementById("waveform")

var imgBlob = canvas2blob(canvasEL);

// Now you can upload img or do whatever else you
// like with it!
var form = new FormData();
form.append('file', imgBlob, 'waveform.png');

```

## License
[MIT License](https://raw.githubusercontent.com/meandavejustice/canvas2blob/master/LICENSE)

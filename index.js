function _base64toArrayBuffer(base64) {
  var binary_string =  window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array( len );
  for (var i = 0; i < len; i++)        {
    var ascii = binary_string.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes.buffer;
}

function _parseB64(b64str) {
  return {
    base64: b64str.substr(b64str.indexOf(',') + 1),
    type: b64str.match(/:([^}]*);/)[1]
  }
}

module.exports = function(canvas) {
  var data = _parseB64(canvas.toDataURL());
  var arrBuffer = _base64toArrayBuffer(data.base64);
  return new Blob([arrBuffer], {type: data.type});
}
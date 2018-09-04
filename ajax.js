// option 
function createXHR(){
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject != "undefined") { /*兼容ie5*/
    if (typeof arguments.callee.activeXString != "string") {
      var versions = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp" ];
      for ( var i = 0, len = versions.length; i < len; i++) {
          try {
            new ActiveXObject(versions[i]);
            arguments.callee.activeXString = versions[i];
            break;
          } catch (ex) {
            // TODO
          }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);
  } else {
    throw new Error ("NO XHR object available")
  }
}

// 发送get请求
function getRequest(url, param, success, fail) {
  var xhr = createXHR();
  for (var item in param) {
    url += (url.indexOf("?") == -1) ? "?" : '&';
    url += encodeURLComponent(name) + "=" + encodeURLComponent(value);
  }
  xhr.open('get', url);
  xhr.send(null);
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200) && xhr.status < 300) || xhr.status == 304 {
      if (success) { success(xhr.responseText) }
    }  else {
      if (fail) { fail(xhr.status) }
    }
  }
}
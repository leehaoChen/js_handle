var EventUtil = {
  addHandler: function (element,type, handler) {
    if (element.addEventListener){
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else {
      element['on' + type] =  handler;
    }
  },
  removeHandler: function (element, type, handler){
    if (element.removeEventListener){
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent){
      element.detachEvent('on' + type, handler);
    } else {
      element['on' + type] = handler;
    }
  },
  getEvent: function (event){ return event || window.event},
  stopPropagation: function(e){
    if (e.stopPropagation()){
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  },
  preventDefault : function(e){
    if (e.preventDefault()){
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  },
  getButton: function(event){
    if (document.implementation.hasFeature("MouseEvents", 2.0)){
      return event.returnValue
    } else {
      switch (event.buttob){
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
          return 0;
        case 2:
        case 6:
          return 2;
        case 4:
          return 1;
      }
    }
  },
  getCharCode: function(event){
    if (typeof event.charCode == "number"){
    return event.charCode;
    } else {
    return event.keyCode;
    }
    },
};
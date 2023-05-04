'use strict';
// window.l = console.log;
// l('Hello World3');
// l(document);
Window.prototype.l = console.log;
window.__proto__.d = console.dir;

Object.defineProperty(Window.prototype, 'l', {
  
    writable: 0,
    enumerable: 0,
    configurable: 0,
});

Object.defineProperty(Function.prototype, "wolfThis", {
    get: function wolfThis() {
       
        return  this
    }
});

Object.defineProperty(Object.prototype, "wolf", {
    set: function wolf(param1) {
        this._wolf = param1;
    },
      get: function wolf() {
       
        return  this._wolf
    }
});




Object.defineProperty(Function.prototype, "jobob", {
    value: function(){
        l(this)
    }
});







Object.prototype.banana = 'banana919';
Object.prototype.apple = 'apple919';
Object.prototype.funcTest = ()=>'jojoj313';





// l(obj)

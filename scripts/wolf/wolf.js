'use strict';
// window.l = console.log;
// l('Hello World3');
// l(document);
window.l = console.log;
window.__proto__.d = console.dir;
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







Object.prototype.banana = 'banana777';
Object.prototype.funcTest = ()=>'jojoj313';

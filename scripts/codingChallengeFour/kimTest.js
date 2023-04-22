let kimTest1  = {
    fName: 'kim1',
}

Object.defineProperty(kimTest1, 'test', {
    value: 'test',
    writable: 1,
    enumerable: 1,
    configurable: 1,
});




Object.defineProperty(kimTest1, 'phone', {
    
    get: function () {
        return this._phone;
    },
    set: function (param1) {
        this._phone = param1;

    } ,
    enumerable: false,       
 configurable: false,
});






export {kimTest1, }
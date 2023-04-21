const kimTest1  = {value: 'kim', writable: 0, enumerable: false, configurable: false,}
const kimTest2 ={
    get: function () {
        return this._kimScripts;
    },
    set: function (param1) {
        this._kimScripts = param1;

    } ,
    enumerable: false,       
 configurable: false,
}





export {kimTest1, kimTest2}
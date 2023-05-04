


let wolfInitSet = function(param1){
  
    
    
    return new Set(param1)

}


let protoObj = {
    wolfInitSet,

    testWolf(){
        return '414'
    }

}



Object.defineProperty(protoObj, 'banana', {
    value: 'banana919',
    writable: 1,
    enumerable: 1,
    configurable: 1,
});






 const jobob = Object.create(protoObj)


 jobob.wolfInitSet([1,2,3,3])

 d(jobob)











d(jobob.testWolf() )

const scripting = 'scripting'



export  default scripting
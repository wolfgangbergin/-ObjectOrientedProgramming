
'use strict'


const cat = {
   
    add(param1){
        this[`_${param1}`] = param1
        return this
    },

    initCat(props){
        
       this.initStudent.call(this, props)
        this.sound = props.sound
        
        return this
    },

    makeSound(){
        l(this.sound)
    }
}



Object.wolfCreate = function(obj){
    let temp = {}
 
    Object.setPrototypeOf(temp, obj)
   
    return temp
    

}






export {cat}
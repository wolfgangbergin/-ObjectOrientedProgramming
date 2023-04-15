
'use strict'

const cat = {
    makeSound(){
        l(this.sound)
    }
}
// const wolf = Object.create(cat)
// wolf.sound = 'woof313'
// wolf.makeSound()



// const waffle = Object.create(cat)
// waffle.sound = 'waff'
// waffle.makeSound()

// const mark = {sound: 'mooyah'}
// Object.setPrototypeOf(mark, cat)
// mark.makeSound()


Object.wolfCreat = function(obj){
    let temp = {}
    Object.setPrototypeOf(temp, obj)
   
    return temp
    

}

const kimy = Object.wolfCreat(cat)
kimy.sound = 'mewmy414'

kimy.makeSound()

const scripts = {scripting: 'script'}
export {scripts}
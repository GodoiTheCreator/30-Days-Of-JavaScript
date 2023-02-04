function fullName(){
    console.log('Eduardo Godoi da Silveira')
}

fullName()

function fullNameArgs(firstName, lastName){
    return firstName+ ' ' + lastName
}

console.log(fullNameArgs('Eduardo', 'Godoi da Silveira'))

function areaOfRectangle(length, width){
    return length * width
}

console.log(areaOfRectangle(2,3))

function perimeterOfRectangle(length, width){
    return 2 * (width + length)
}

console.log(perimeterOfRectangle(2,3))

function volumeOfRectPrism(length, width, height){
    return length*width*height
}

console.log(volumeOfRectPrism(2,3,2))

function weight(mass, gravity = 9.98){
    return mass * gravity
}

console.log(weight(2))

function bmi(weight, height){
    bmiData = weight/(height*height)
        if (bmiData<18.5){
            return 'Underweight'
        }
        else if (bmiData>18.4 && bmiData<25){
            return 'Nomal weight'
        }
        else if (bmiData>24 && bmiData<30){
            return 'Overweight'
        }
        else if (bmiData>29.9){
            return 'Obese'
        }
}

console.log(bmi(99,1.70))

const maximum = (a,b,c) => {
    return Math.max(a,b,c)
}

console.log(maximum(3,6,2))

console.log('-----EXERCISES LEVEL 2-----')

const swapValues = (x,y) =>{
    x = x + y
    y = x - y
    x = x - y
    return [x, y]
}

console.log(swapValues(10,5))

console.log('-----EXERCISES LEVEL 3-----')

function userIdGeneratedByUser(){
    numberOfChar = prompt("Choose the number of Characters:")
    numberOfIds = prompt("Choose the number of Ids:")

    let ids = []
    let id = ""
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 0; i < numberOfIds; i++){
        for (let j = 0; j< numberOfChar; j++){
            id += possible.charAt(Math.floor(Math.random()*possible.length))
        }
        
        ids.push(id)
        id = ""
    }
    return ids
}

console.log(userIdGeneratedByUser())
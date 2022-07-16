const array = [10,20,25,30,40,45,60,50]

Array.prototype.logger = function (number) {
    return this.map(function(i){
        return i * number 
    })
}
console.log(array.logger(2));



// har qanday sonni 2 ga kopaytirish 
// asosan ishga kirish uchun intervyuda beriladigan savollardan biri 
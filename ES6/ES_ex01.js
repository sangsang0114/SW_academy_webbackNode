console.log("test") ; 

newObject1 = {  name : "홍길동", no : 10 } ;
console.log ( newObject1.name ) ; 
var sayNode = function() {
    console.log("Node") ;
}
var es = 'ES'
newObject = {
    sayJS() {
        console.log('JS')
    } ,
    sayNode ,
    [es + 6]: 'Fantastic'
} 
newObject.sayJS(); 
newObject.sayNode(); 
console.log(newObject.ES6 )

async function whatsYourFavorite(){
    let fav ="js" ;
    return fav; 
}
async function displaySubject(subject){
    return `Hello, ${subject}` ;
}
async function init() {
    console.log(1111) ;
    const response = await whatsYourFavorite() ;
    const result = await displaySubject(response) ; 
    console.log(result)
    console.log(3333) ;
} 
init() ;
console.log(2222) ;

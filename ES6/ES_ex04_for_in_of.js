const gitBook = {
    title : "제목" ,
    pubDate : "2019" , 
    pages : 272,
    finished : true
} 
for ( key in gitBook) {
    console.log ( `${key} : ${gitBook[key]}`)
}

const students = ["P", "K", "Lee", "Kang"]
for (let stu of students ) {
    console.log ( `${stu}`)
}
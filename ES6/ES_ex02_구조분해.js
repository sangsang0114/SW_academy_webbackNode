const candyMachine = { 
    status :{
        name : 'node' ,
        count : 5
    } , 
    getCandy() {
        // this.status.count--; 
        //return this.status.count;
        return 111;
    }
};
const { getCandy, status : {count}  } = candyMachine; 
console.log ( getCandy()  ) 
console.log ( count  )  

const array = ['nodejs', {}, 10, true ]
const [node, obj, , bool] = array; 

console.log ( node ) 
console.log ( obj )
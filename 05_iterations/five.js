const coding=["js","ruby","java","python","cpp"]

coding.forEach( function (item) {
    // console.log(item);  
} )

coding.forEach((val)=>{
    // console.log(val);
    
})

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe(item)); // wrong

// coding.forEach(printMe); // right


coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr); 
})




// loop for objects inside arrays 


const mycoding = [
    {
        language: "javascript",
        filename: "js"
    },
    {
        language: "c++",
        filename: "cpp"
    },
    {
        language: "python",
        filename: "py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.language);
})
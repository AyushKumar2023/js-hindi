const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map((num) => num+10)    // map also return values

// const newNums=myNums.map((num) => { return num+10 })

// const newNums=[]
// myNums.forEach((num) => {
//     newNums.push(num+10)
// })


const newNums=myNums
.map((num) => num*10)
.map((num) => num+10)
.filter((num)=> num> 60)

console.log(newNums);

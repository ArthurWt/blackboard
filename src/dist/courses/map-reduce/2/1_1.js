const students = [
  {id : 1, name : "ramroll", score : 99},
  {id : 2, name : "hufei", score : 9},
  {id : 3, name : "yangchengcheng", score : 89},
  {id : 4, name : "mick", score : 70},
  {id : 5, name : "tez", score : 59},
  {id : 6, name : "dorphi", score : 22}
]

// 找出score > 60的元素

const selected = students.filter( student => student.score > 60 )
console.log(selected)
// 找出id是5的学生
const student = students.find( student => student.id === 5 )
console.log(student)



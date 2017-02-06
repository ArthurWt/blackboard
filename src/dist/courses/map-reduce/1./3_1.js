// 所有数据处理都是SQL
// 我们用map/reduce完成一些sql操作

// 假设数据库中有一张成绩单表，那么用js的描述是
const students = [
  {id : 1, name : "ramroll", score : 99},
  {id : 2, name : "hufei", score : 9},
  {id : 3, name : "yangchengcheng", score : 89},
  {id : 4, name : "mick", score : 70},
  {id : 5, name : "tez", score : 59},
  {id : 6, name : "dorphi", score : 22}
]

// Projection 
// select name from students

const selected = students.map( student => {
  return {name : student.name}
})

console.log(selected)




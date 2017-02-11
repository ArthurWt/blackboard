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
 
// 筛选所有及格的人
// select name from users where scroe > 60
const selectScoreLargeThan60 = (list, student) => {
  if(student.score > 60){
    list = [...list, student]
  }
  return list
}

const selected = students.reduce( selectScoreLargeThan60, [])

console.log(selected)
















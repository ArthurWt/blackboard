
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
 
// 按照分数排序(倒序)
// 插入排序
// select * from students order by score desc


const sorted = students.reduce( (list, student) => {
  let i = 0;
  for(; i < list.length; i++){
    if(list[i].score < student.score){
      break;  
    }
  }
  
  return [...list.slice(0, i), student, ...list.slice(i, list.length)]
}, [])

console.log(sorted)

















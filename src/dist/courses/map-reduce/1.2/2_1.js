// 同理，排序算法依然应该做成高阶函数
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

const sortHighOrder = (comparator) => {
  
  return (list, item) => {
    let i = 0;
    for(; i < list.length; i++){
      if(comparator(list[i].score , item.score)){
        break;  
      }
    }
    return [...list.slice(0, i), item, ...list.slice(i, list.length)]
  }
}

const sorted = students.reduce( sortHighOrder( (a, b) => a.score > b.score) , [])

console.log(sorted)
















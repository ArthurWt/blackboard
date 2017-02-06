// 同理， 我们应该用高阶函数来让我们的算法更具有一般性
// 所有数据处理都是SQL
// 我们用map/reduce完成一些sql操作
// 假设数据库中有一张成绩单表，那么用js的描述是
const students = [
  {id : 1, name : "ramroll", score : 99, class : 1},
  {id : 2, name : "hufei", score : 9, class : 2},
  {id : 3, name : "yangchengcheng", score : 89, class : 2},
  {id : 4, name : "mick", score : 70, class : 1},
  {id : 5, name : "tez", score : 59, class : 2},
  {id : 6, name : "dorphi", score : 22, class : 1}
]
 
const groupByHighOrder = (groupKeyName) => {
  return (groups, item) => {
    if(!groups[item[groupKeyName]]){
      groups[item[groupKeyName]] = 
       {key : item[groupKeyName], values : []}
    }
    groups[item[groupKeyName]].values.push(item)
    return groups
  }
}

// 按照班级进行分组
// 然后求最大分数
// 插入排序
// select max(score) from students group by class
// 将学生按照class分组
const grouped = students.reduce( groupByHighOrder("class"), {})


// 提取为数组
const arrGroups = Object.values(grouped)

// 计算每个分组的最大值
const final = arrGroups.map( group => {
  return {
  	class : group.key,
    max : group.values.reduce( (a, b) => {
      return b.score > a ? b.score : a
    }, 0)
  }
})


console.log(final)















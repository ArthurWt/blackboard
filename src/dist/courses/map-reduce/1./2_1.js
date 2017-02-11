// 用map处理字符串然后用reduce join字符串
// 将 this-is-an-example 变为 This Is An Example
const joined = "this-is-an-example"
	.split("-")
	.map( word =>  { // 用map将每个词的第一个字符变成大写
      const [head, ...others] = word
      console.log("head:", head)
      console.log("others:", others)
      
      return head.toUpperCase() + others.reduce((x, y) => x + y, "")
    })
	.reduce( (s, word) => {
      console.log("reduce: " + word)
    	return s + " " + word  
    })
console.log(joined)





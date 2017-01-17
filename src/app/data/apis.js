/***********************************************
 *
 * MIT License
 *
 * Copyright (c) 2016 珠峰课堂,Ramroll
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */



const get = (url) => {
  return new Promise((resolve, reject) => {
    $.get(url, data => {
        resolve(data)
      })
      .catch(err => {
        resolve(null)
      })
  })
}

export const loading_data = async ({course, topic, id}) => {

  const url = `/courses/${course}/${topic}/${id}.log`
  const url1 = `/courses/${course}/${topic}/${id}.widget`

  const data = await Promise.all([
    get(url),
    get(url1)
  ])
  
  
  /// TODO 调试返回数据
  
  let widgets = [] 
  if(!data[1]) {
    widgets = [
      // {type : "code", x : 100, y : 100, w : 300, h : 300},
      // {type : "markdown", x : 300, y : 100, w : 300, h : 300}
    ] 
  } else {
    try{
      widgets = JSON.parse(data[1])
    }
    catch(e) {
     /// TODO 
    }
  }
  return {
    draw : data[0],
    widgets
  }
}
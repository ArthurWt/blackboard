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

export const ACTION_DRAW = "draw@Blackboard"
export const ACTION_DRAW_SEGMENT = "draw_seg@Blackboard"
export const ACTION_CLEAR = "clear@Blackboard"


export const draw = (course, topic, id, x, y, color, penSize) => {
  return {
    type : ACTION_DRAW,
    course,
    topic,
    id,
    x, 
    y,
    color,
    penSize
  }
}


export const draw_segment = (course, topic, id) => {
  return {
    type : ACTION_DRAW_SEGMENT,
    course,
    topic,
    id,
  }
}


// export const set_color = (course, topic, id, color) => {
//   return {
//     type : ACTION_SET_COLOR,
//     course,
//     topic,
//     id,
//     color : color
//   }
// }

export const clear = (course, topic, id) => {
  return {
    course,
    topic,
    id,
    type : ACTION_CLEAR 
  }  
}
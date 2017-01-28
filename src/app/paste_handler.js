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

import {dataTransferItemToBase64} from "./util/data_helper"
import {Dropbox} from "./Dropbox"
import {getDimensions} from "util/dimensions"

import md5 from "md5"
/**
 * 处理Paste图片
 * @param event
 * @param blackboard
 */
export const paste_handler_factory = (blackboard) => {
  
  return async (event) => {
    
    
    if(event.clipboardData){
      if(event.clipboardData.items.length > 0) {

        const item = event.clipboardData.items[0]
        switch(item.type) {
          case "image/png" :
            const {course, topic, id} =  blackboard.props.course
            const data = await dataTransferItemToBase64(item)
            const img = new Image()
            img.src = data

            const maxObj = Dropbox.__maxZIndexObj(topic, id)
            const {width , height} = getDimensions()
            img.onload = (event) => {
              const imgHeight = img.height;
              const imgWidth = img.width;
              /**
               * 增加图片
               */
              store.dispatch({
                type: "ADD_IMAGE",
                course,
                topic,
                id,
                data
              })

              
              // 计算最终的长宽
              let w = imgWidth > width - 160 ? width - 160 : imgWidth
              
              const r = w / imgWidth
              
              const h = r * imgHeight
              
              store.dispatch({
                type: "ADD_WIDGET",
                widget: {
                  type: "image",
                  x: 80, y: 80,
                  w, h,
                  zIndex: maxObj ? maxObj.state.style.zIndex + 1 : 10,
                  img: `/courses/${course}/${topic}/${id}_${md5(data)}.png`
                },
                topic,
                id
              })
              return true
            }

            event.preventDefault()
            event.stopPropagation()

        }


        

      }
    }
  }

}

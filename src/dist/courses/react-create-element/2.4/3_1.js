/**
 * 从React, ReactDOM中 import
 */
import React from 'react'
import ReactDOM from 'react-dom'


// 获取app元素
const appElement = document.getElementById('app')

const rnd = Math.random()

const areas = ['北京', '上海', '深圳']
// 渲染
ReactDOM.render( 
  <ul>
    {
      areas.map( (area, i) => {
    	return <li key={i}>{area}</li>  
      })
    }
  </ul>, 
appElement)














/**
 * 从React, ReactDOM中 import
 */
import React from 'react'
import ReactDOM from 'react-dom'


// 获取app元素
const appElement = document.getElementById('app')

const app = <ul>
        <li>北京</li>
        <li>上海</li>
        <li>深圳</li>
</ul>

// 渲染
ReactDOM.render( app, appElement)


















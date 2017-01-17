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
 * 
 */
import React, {Component} from 'react'


import {SoundMeter} from "util/SoundMeter"


export class AudioRecorder extends Component {

  constructor(){
    super()
    this.state = {
      soundValue : 0
    }
    
    this.handleSuccess = this.handleSuccess.bind(this)
  }
  componentDidMount(){
    
  }
  
  start(){
    console.log("start @AudioRecorder")
    this.audioContext = new AudioContext()
    const constraints = {
      audio: true,
      video: false
    }
    
    navigator
      .mediaDevices
      .getUserMedia(constraints).
      then(this.handleSuccess)
      .catch(this.handleError);
  }

  handleSuccess(stream){
    // window.stream = stream;
    const soundMeter = new SoundMeter(this.audioContext);
    
    const _s = this

    soundMeter.connectToSource(stream, function(e) {
      if (e) {
        alert(e);
        return;
      }
      setInterval(function() {
        console.log(soundMeter.instant.toFixed(2))
        _s.setState({
          soundValue : soundMeter.instant.toFixed(2)
        })
      }, 200);
    }); 
  }
  
  handleError(error){
    console.error(error)
    
  }
  
  render(){
      
    return <div style={{width : '100%', paddingTop : '20px'}}>
      <div onClick={this.start.bind(this)} style={{height : "40px", width : '100%'}}>
        <i className="material-icons">keyboard_voice</i>
      </div>
      <meter style={{width : '100%'}} high="0.25" min="0" max="0.3" value={this.state.soundValue}></meter>
    </div>
  }
}
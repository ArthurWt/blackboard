import {getDimensions} from 'util/dimensions'

const initial = {
  width : getDimensions().width,
  height : getDimensions().height 
}
export const layout = (state = initial, action) => {
  
  switch (action.type) {
    case "WINDOW_RESIZE" :
      return {width : action.width, height : action.height}
  }
  return state
}

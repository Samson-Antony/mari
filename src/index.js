import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './styles.css'


import marilux from './pic/marilux.jpeg' 
import bike from './pic/bike.jpg' 
import whathesays from './pic/whathesays.jpg' 
import whatiknow from './pic/whatiknow.jpg' 
import londoneye from './pic/londoneye.jpg' 
import walk from './pic/walk.jpg' 

import Header from './header'



const slides = [
  
  { id: 0, url: whathesays },
  { id: 1, url: bike  },
  { id: 0, url: whatiknow  },
  { id: 4, url: marilux  },
 
]

const App = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 }, 
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 3000), [])
  return transitions.map(({ item, props, key }) => (
    <div>
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage :`url(${item.url})` }}
    />
    <footer style={headerStyle}>
      by Bharath
    </footer>
    </div>
  ))
}
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
export default App;

render(<Header />, document.getElementById('root'))

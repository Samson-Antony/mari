import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './styles.css'


import vloger1 from './pic/vloger1.jpg' 

 




const slides = [
  
  { id: 0, url: vloger1 },

 
]

const Vloger = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 }, 
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 1), 3000), [])
  return transitions.map(({ item, props, key }) => (
    <div class='box'>
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


    
export default Vloger;

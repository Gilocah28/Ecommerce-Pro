import React from 'react'
import ImageGrid from './imageSection/ImageGrid'
import Title from './textTitle/Title'
import './main.scss'


const MainContainer = () => {
  return (
    <div className='main'>
      <ImageGrid/>
      <Title/>
    </div>
  )
}

export default MainContainer

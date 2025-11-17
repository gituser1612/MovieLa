import React from 'react'
import './Bookmark_card.css'
import img from '../../assets/coolie_movie.jpg'

const Bookmark_card = () => {
  return (
    <div className='bookmark_card'>
      <img src={img} alt="" />
      <p>Coolie</p>
    </div>
  )
}

export default Bookmark_card
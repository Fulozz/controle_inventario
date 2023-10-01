import React from 'react'
import './listing.css'

// imported icons
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

//imported image
import img from '../../../Assets/image 1.jpeg'

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>Lists</h1>
        <button className='btn flex'>
          See all <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Anual</h3>
        </div>
      </div>
    </div>
  )
}

export default Listing
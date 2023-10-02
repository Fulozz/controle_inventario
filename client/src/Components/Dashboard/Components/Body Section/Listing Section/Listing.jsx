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
        <h1>Ultimas inclusões</h1>
        <button className='btn flex'>
          Ver todas <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Teste 1</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Teste 2</h3>
        </div>


        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Teste 3</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Teste 4</h3>
        </div>
        
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Teste 4</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Teste 4</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Teste 4</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Image Name" />
          <h3>Teste 4</h3>
        </div>
        
      </div>

      <div className="sellers flex">
        <div className="topSollers">
          <div className="heading flex">
            <h3>Top</h3>
            <button className='btn flex'>
              See all <BsArrowRightShort className='icon' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
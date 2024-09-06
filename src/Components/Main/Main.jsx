import React , {useEffect} from 'react'
import './main.css'

// import icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

import img from '../../Assets/img-1.jpg';
import img2 from '../../Assets/img-2.jpg';
import img3 from '../../Assets/img-3.jpg';
import img4 from '../../Assets/img-4.jpg';
import img5 from '../../Assets/img-5.jpg';
import img6 from '../../Assets/img-6.jpg';
import img7 from '../../Assets/img-7.jpg';
import img8 from '../../Assets/img-8.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known forits luxurious stays and adventurous activites.'
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: ' Maldives',
    location: ' Maldives',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Maldives has an easy climate and is good for travel all year round. The peak season for Maldives travel is the Christmas – New year season of December and January, after which pleasant weather continues till well into April.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: ' Great Barrier Reef',
    location: ' Australia',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Maldives has an easy climate and is good for travel all year round. The peak season for Maldives travel is the Christmas – New year season of December and January, after which pleasant weather continues till well into April.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: ' Sicily',
    location: ' Italy',
    grade: 'CULTURAL RELAX',
    fees: '$1500',
    description: 'Maldives has an easy climate and is good for travel all year round. The peak season for Maldives travel is the Christmas – New year season of December and January, after which pleasant weather continues till well into April.'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: '  Banff',
    location: 'Canada ',
    grade: 'CULTURAL RELAX',
    fees: '$1600',
    description: 'Maldives has an easy climate and is good for travel all year round. The peak season for Maldives travel is the Christmas – New year season of December and January, after which pleasant weather continues till well into April.'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: ' Hawaii',
    location: ' USA',
    grade: 'CULTURAL RELAX',
    fees: '$2000',
    description: 'Maldives has an easy climate and is good for travel all year round. The peak season for Maldives travel is the Christmas – New year season of December and January, after which pleasant weather continues till well into April.'
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Savannah',
    location: ' Georgia',
    grade: 'CULTURAL RELAX',
    fees: '$1200',
    description: 'Maldives has an easy climate and is good for travel all year round. The peak season for Maldives travel is the Christmas – New year season of December and January, after which pleasant weather continues till well into April.'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: ' Oslo',
    location: ' Norway',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: 'Maldives has an easy climate and is good for travel all year round. The peak season for Maldives travel is the Christmas – New year season of December and January, after which pleasant weather continues till well into April.'
  }




]

const Main = () => {



  // React hook for scroll

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos ="fade-up" className="title">
          Most Visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>

                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>Details <HiOutlineClipboardCheck className='icon' /></button>

                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main

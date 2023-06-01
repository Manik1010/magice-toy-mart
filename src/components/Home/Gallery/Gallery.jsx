import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import './Gallery.css'


const Gallery = () => {

    const galleryImages = [
        {
          img: 'https://mcdn.wallpapersafari.com/medium/47/41/U5iEZl.jpg'
        },
        {
          img: "https://mcdn.wallpapersafari.com/medium/23/89/CrZFh8.jpg"
        },
        {
          img: "https://mcdn.wallpapersafari.com/medium/47/85/J89bL4.jpg"
        },
        {
          img: "https://mcdn.wallpapersafari.com/medium/12/41/aYNexV.jpg"
        },
        {
          img: "https://mcdn.wallpapersafari.com/medium/87/82/r5Ou0X.jpg"
        },
        {
          img: "https://mcdn.wallpapersafari.com/medium/10/80/jU1xzC.jpg"
        },
        {
          img: "https://mcdn.wallpapersafari.com/medium/47/85/J89bL4.jpg"
        },
        {
          img: "https://mcdn.wallpapersafari.com/medium/27/17/q3DFB2.jpg"
        },
        {
          img: "https://mcdn.wallpapersafari.com/medium/98/30/x0p7MC.jpg"
        }
      ]

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }

    return (
        <div>
             <h1 className="text-3xl font-bold my-4 text-center">Toys Gallery</h1>
            {openModal &&
                <div className='sliderWrap'>
                    <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={galleryImages[slideNumber].img} alt='' />
                    </div>
                </div>
            }

            <div className='galleryWrap'>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return (
                            <div
                                className='single'
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img src={slide.img} alt='' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;
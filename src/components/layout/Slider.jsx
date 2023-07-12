import React from 'react'

const Slider = () => {
  return (
    <>
       <div className="container mt-5  ">
        <div
          id="productSlider"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/s4.jpg"
                className="d-block w-100"
                alt="Product 1"
                height="240px"
              />
              <div className="carousel-caption">
                <h3 className='text-dark'>Brands</h3>
                <p className='text-dark'>Presents a female model and your task is to make her a real fashion diva!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/s2.webp"
                className="d-block w-100"
                alt="Product 2"
                height="240px"
              />
              <div className="carousel-caption">
                <h3>Awesome</h3>
                <p>Fashionable Kurti latest design</p>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productSlider"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productSlider"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider

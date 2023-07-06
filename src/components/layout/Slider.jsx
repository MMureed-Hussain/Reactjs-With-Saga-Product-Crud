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
                src="/images/slider1.jpg"
                className="d-block w-100"
                alt="Product 1"
                height="240px"
              />
              <div className="carousel-caption">
                <h5>Buildings</h5>
                <p>Description of Buildings</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/slider2.jpg"
                className="d-block w-100"
                alt="Product 2"
                height="240px"
              />
              <div className="carousel-caption">
                <h5>Beach</h5>
                <p>Description of Beach House</p>
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

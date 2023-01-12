import React from "react"
import Carousel from "react-bootstrap/Carousel"
export const LandingPage = () => {
  return (
    <div className='LandingPage container h-full'>
      <main role='main'>
        <Carousel id='myCarousel' variant='dark'>
          <Carousel.Item className='carousel-item'>
            <img className='d-block w-100' src='' alt='Third slide' />
            <Carousel.Caption className='text-left'>
              <h1>Example headline.</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img className='d-block w-100' src='' alt='Third slide' />
            <Carousel.Caption className='carousel-caption'>
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img className='d-block w-100' src='' alt='Third slide' />
            <Carousel.Caption className='carousel-caption text-right'>
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className='container marketing'>
          <div className='row'>
            <div className='col-lg-4'>
              <h2>Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p></p>
            </div>
            <div className='col-lg-4'>
              <h2>Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p></p>
            </div>
            <div className='col-lg-4'>
              <h2>Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p></p>
            </div>
          </div>

          <hr className='featurette-divider' />

          <div className='row featurette'>
            <div className='col-md-7'>
              <h2 className='featurette-heading'>
                First featurette heading.{" "}
                <span className='text-muted'>It’ll blow your mind.</span>
              </h2>
              <p className='lead'>
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div className='col-md-5'>
              <img
                styles={{
                  height: "100%",
                  width: "100%",
                }}
                alt='someO'
                src='https://www.mecca.com.au/on/demandware.static/-/Sites-mecca-online-catalog/default/dwe9a74071/product/aveda/lg/i-059970-foot-relief-1-378.jpg'
              />
            </div>
          </div>

          <hr className='featurette-divider' />

          <div className='row featurette'>
            <div className='col-md-7 order-md-2'>
              <h2 className='featurette-heading'>
                Oh yeah, it’s that good.{" "}
                <span className='text-muted'>See for yourself.</span>
              </h2>
              <p className='lead'>
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className='col-md-5 order-md-1'>
              <img
                styles={{
                  height: "100%",
                  width: "100%",
                }}
                alt='someO'
                src='https://www.mecca.com.au/on/demandware.static/-/Sites-mecca-online-catalog/default/dwc0e085ce/product/susann/lg/i-056623-mallow-blossom-bath-new-1-378.jpg'
              />
            </div>
          </div>

          <hr className='featurette-divider' />

          <div className='row featurette'>
            <div className='col-md-7'>
              <h2 className='featurette-heading'>
                And lastly, this one.
                <span className='text-muted'>Checkmate.</span>
              </h2>
              <p className='lead'>
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div className='col-md-5'>
              <img
                styles={{
                  height: "100%",
                  width: "100%",
                }}
                alt='someO'
                src='https://www.mecca.com.au/on/demandware.static/-/Sites-mecca-online-catalog/default/dw66305f6a/product/kurkdj/lg/i-058108-lf-aqua-unversalis-eau-de-toilette-70ml-1-378.jpg'
              />
            </div>
          </div>

          <hr className='featurette-divider' />
        </div>

        <footer className='container'>
          <p className='float-right'></p>
          <p></p>
        </footer>
      </main>
    </div>
  )
}

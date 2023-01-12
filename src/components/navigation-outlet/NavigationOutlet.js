import React, { Fragment } from "react"
import { Stack } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

export const NavigationOutlet = () => {
  return (
    <Fragment>
      <header>
        <Navbar
          variant='dark'
          className='navbar  navbar-dark w-full justify-content-between  bg-dark'>
          <Navbar.Brand>
            <img
              class='site-global-header__logo-image'
              src='/on/demandware.static/Sites-MeccaAU-Site/-/default/dw88839a99/images/mecca-header-logo.svg'
              alt='MECCA'
              width='148'
              height='30'
            />
            {/* <img
              className='d-block w-100 '
              alt='woops'
              src='https://www.mecca.com.au/on/demandware.static/Sites-MeccaAU-Site/-/default/dw88839a99/images/mecca-header-logo.svg'
            /> */}
          </Navbar.Brand>
          <div>
            {/* <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'></li>
              <li className='nav-item'></li>
              <li className='nav-item'></li>
            </ul> */}
            <form className='mt-2 mt-md-0'>
              <Stack direction='horizontal'>
                <input
                  className='form-control mr-sm-2'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-outline-success my-2 my-sm-0'>
                  Search
                </button>
              </Stack>
            </form>
          </div>
        </Navbar>
      </header>
      <div className='AppBody  bg-light'>
        <Outlet />
      </div>
    </Fragment>
  )
}

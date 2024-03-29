import React from 'react'
import HeaderPage from './HeaderPage'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


export default function Navbar({ showContent = true }) {
  return (
    <div>
      <HeaderPage />

      <div className="home-screen container-fluid">
        <div className="home-cover">
          <div id="menu-jk" className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-3 logo">
                  {/* <img className="logo-wt" src="assets/images/logo.png" alt="" /> */}
                  {/* <img
                className="logo-gry"
                src="assets/images/logo-gray.png"
                alt=""
              /> */}
                  <Link data-toggle="collapse" data-target="#menu" href="#menu">
                    <i className="fas d-block d-md-none small-menu fa-bars" />
                  </Link>
                </div>
                <div id="menu" className="col-md-9 d-none d-md-block">
                  <ul>
                    <li>

                      <Link href="/">Home </Link>
                    </li>
                    <li>

                      <Link href="/about">About </Link>
                    </li>
                    <li>
                      <Link href="/services">Services </Link>
                    </li>
                    <li>
                      <Link href="/skill">Skills </Link>
                    </li>
                
                    <li>
                      <Link href="/contact">Contact </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row home-detail">
              {showContent && (
                <>
                  <div className="col-md-5 animated bounceInLeft hom-img">
                    <img src="assets/images/name.png" alt="" />
                  </div>
                  <div className="col-md-7 animated bounceInRight homexp">
                    <h5>Hello I am</h5>
                    <h2>Md. Solayman Hossen Selim</h2>
                    <span>
                      Professional <a>Full Stack Web Developer </a>
                    </span>

                    <p>
                      To work as a Software Engineer applying my knowledge in the field of testing, designing, and
                      maintenance to cater to the specific needs of the people. I wish to work in a team of motivated
                      individuals who wish to work towards the advancement of the company and its goals.
                    </p>
                    <ul className="socil-icon">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      {/* <li>
                <Link  href="#">
                  <i className="fab fa-pinterest-p" />
                 </Link>
              </li>
              <li>
                <Link  href="#">
                  <i className="fab fa-dribbble" />
                 </Link>
              </li>
              <li>
                <Link  href="#">
                  <i className="fab fa-behance" />
                 </Link>
              </li> */}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>


      </div>
    </div>



  )
}

import React from 'react'
import HeaderPage from './HeaderPage'
import Link from 'next/link'
export default function Navbar({ showContent = true }) {
  return (
    <>
    <HeaderPage/>
    
    <div className="home-screen container-fluid">
    <div className="home-cover">
      <div id="menu-jk" className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 logo">
              {/* <img className="logo-wt" src="assets/images/logo.png" alt="" /> */}
              <img
                className="logo-gry"
                src="assets/images/logo-gray.png"
                alt=""
              />
              <Link  data-toggle="collapse" data-target="#menu" href="#menu">
                <i className="fas d-block d-md-none small-menu fa-bars" />
               </Link>
            </div>
            <div id="menu" className="col-md-9 d-none d-md-block">
              <ul>
                <li>

                  <Link  href="/">Home </Link>
                </li>
                <li>
                 
                  <Link href="/about">About </Link>
                </li>
                <li>
                  <Link  href="#services">Services </Link>
                </li>
                <li>
                  <Link  href="/skill">Skills </Link>
                </li>
                <li>
                  <Link  href="#testimonial">Testimonial </Link>
                </li>
                <li>
                  <Link  href="#portfolio">Portfolio </Link>
                </li>
                <li>
                  <Link  href="/contact">Contact </Link>
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
            <h5>Hello I'm</h5>
            <h2>Md. Solayman Hossen Selim</h2>
            <span>
              Professional <a >Full Stack Web Developer </a>{" "}
            </span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
            </p>
            <ul className="socil-icon">
              <li>
                <Link  href="#">
                  <i className="fab fa-facebook-f" />
                 </Link>
              </li>
              <li>
                <Link  href="#">
                  <i className="fab fa-twitter" />
                 </Link>
              </li>
              <li>
                <Link  href="#">
                  <i className="fab fa-instagram" />
                 </Link>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
          </>
          )}
        </div>
      </div>
    </div>

    {/* <script src="assets/js/jquery-3.2.1.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/plugins/scroll-fixed/jquery-scrolltofixed-min.js"></script>
    <script src="assets/plugins/slider/js/owl.carousel.min.js"></script>
    <script src="assets/js/script.js"></script> */}
  </div>
  </>
  
  )
}

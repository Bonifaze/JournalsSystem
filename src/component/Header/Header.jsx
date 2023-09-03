import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  console.log(menuOpened);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <h1>ACA Journal</h1>
        {/* <marquee behavior="" direction="">Recognition of Knowledge</marquee> */}
        {/* <img src="./logo.png" alt="logo"  width={100}/> */}

        <OutsideClickHandler 
        onOutsideClick={()=>{
        setMenuOpened(false)
        }}  >

        {/* {menuOpened && ( */}
       
           <div className="flexCenter h-menu" 
          style={getMenuStyles(menuOpened)}>
            <a href="">HOME</a>
            <a href="">JOURNALS</a>
            <a href="">HOW TO USE </a>
            <a href="">ABOUT US</a>
            <a href="">CONTACT</a>
            <button className="button" onClick={openLoginModal}>
              <a href="" className="">
                Sign In
              </a>
            </button>
            <button className="button " onClick={openRegisterModal}>
              <a href="" className="" >
                Sign Up
              </a>
            </button>
            {showLoginModal && <LoginModal closeModal={closeModals} />}
            {showRegisterModal && <RegisterModal closeModal={closeModals} />}
          </div>
          
         {/* )}   */}
      </OutsideClickHandler>
        

        <div className=" flexCenter log-btn">
          <button className="button" onClick={openLoginModal}>
            <a href="" className="">
              Sign In
            </a>
          </button>
          <button className="button" onClick={openRegisterModal}>
            <a href="" className="">
              Sign Up
            </a>
          </button>
        </div>
        
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
          {/* <div className="menu-icon" > */}
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

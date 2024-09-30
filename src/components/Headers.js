import React from 'react';
import { FaRegHeart, FaPhoneAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/images/logo.png"

class Header extends React.Component {
    render(){
        return (
            <header className='head'>
                <img src={logo} alt='LOGO' className='headLogo'/>
                <div className='headTitles'>
                    <p onClick={() =>console.log("Главный экран")}>Главная</p>
                    <p onClick={() =>console.log("Каталог")}>Каталог &#9660;</p>
                    <p onClick={() =>console.log("Оптовая продажа")}>Оптовая продажа</p>
                    <p onClick={() =>console.log("О нас")}>О нас</p>
                </div>

                <div className='headRightArea'>
                    <div className='headContactNumber'>
                        <FaPhoneAlt className="icon" />
                        <p>+7 (777) 77 77 777</p>
                    </div>
                    <FaRegHeart className="icon" />
                    <FiShoppingCart className="icon" />
                </div>
            </header>
        )
    }
}
export default Header
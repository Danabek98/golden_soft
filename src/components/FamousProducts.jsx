import React, { useState } from 'react';
import { GoGift } from "react-icons/go";
import { MdDone } from "react-icons/md";
import logo from "../assets/images/Logo2.png"
import twits from "../assets/images/twit.png"



const FamousProducts = () => {
    const [active, setActive] = useState('left');

    const handleLeftClick = () => {
        setActive('left');
    };

    const handleRightClick = () => {
        setActive('right');
    };
    return (
        <div className='FamousProducts'>
            <div className='famous divPadding'>
                <div className='flexSpBw'>
                    <p className='titleTxt'>Наши популярные продукты</p>
                    <div>
                        <span
                            onClick={handleLeftClick}
                            style={{
                                fontSize:'24pt', fontWeight:'bolder', fontStyle: 'normal',
                                cursor: active === 'left' ? 'not-allowed' : 'pointer',
                                color: active === 'left' ? 'gray' : 'black',
                                pointerEvents: active === 'left' ? 'none' : 'auto',
                                }}
                                >
                            &#8249;
                        </span>
                        <span
                            onClick={handleRightClick}
                            style={{
                                fontSize:'24pt', fontWeight:'bolder',
                                cursor: active === 'right' ? 'not-allowed' : 'pointer',
                                color: active === 'right' ? 'gray' : 'black',
                                pointerEvents: active === 'right' ? 'none' : 'auto',
                                }}
                                >
                            &#8250;
                        </span>
                    </div>
                </div>
                <div className="productList flexSpBw">
                    <div className="box">
                        <div className="cardTop cardPadding">
                            <div className="flexSpBw">
                                <div className="inStock flexSpBw">
                                    <div className="cardIndicator">
                                        <MdDone />
                                    </div>
                                    <div className="cardInfo">
                                        В наличии
                                    </div>
                                </div>
                                <div className="sale">
                                    SALE
                                </div>
                            </div>
                            <div className="giftInfo flexSpBw">
                                <GoGift />
                                <p>Подарок</p>
                            </div>
                        </div>
                        <div className="cardBottom cardPadding">
                            <p>Дверной Замок Golden Soft для отеля</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="cardTop">

                        </div>
                        <div className="cardBottom">
                            
                        </div>
                    </div>
                    <div className="box">
                        <div className="cardTop">
                        </div>
                        <div className="cardBottom">    
                        </div>
                    </div>
                    <div className="box">
                        <div className="cardTop">
                        </div>
                        <div className="cardBottom">    
                        </div>
                    </div>
                </div>
            </div>
            <div className="weCall">
                <div className="box centered">
                    <p className='titleTxt'>Мы вам перезвоним</p>
                    <p>Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p>
                    <form action="" className='flexSpBw'>
                        <input type="text" placeholder='Ваше имя' />
                        <input type="text" placeholder='Ваш Email' />
                        <button className='btn'>Отправить</button>
                    </form>
                </div>
            </div>

            <div className="Footer flexSpBw divPadding">
                <div className="box flexSpBw">
                    <img src={logo} alt='LOGO'id='footerLogo'/>
                    <img id='socialImg' src={twits} alt='Social'/>
                </div>
                <div className="box">
                    <p className='FooterTitle'>Навигация</p>
                    <p className='FooterText'>Главная</p>
                    <p className='FooterText'>Каталог</p>
                    <p className='FooterText'>Оптовая продажа</p>
                    <p className='FooterText'>О нас</p>
                </div>
                <div className="box">
                    <p className='FooterTitle'>Наши контакты</p>
                    <pre className='FooterText'>Телефоны</pre>
                    <p className='FooterTitle'>+7 (777) 777 77 77</p>
                    <p className='FooterTitle'>+7 (777) 777 77 77</p>
                    <p className='FooterText'>Email</p>
                    <p className='FooterText'>О нас</p>
                    <p className='FooterTitle'>danabek_99_98@mail.ru</p>

                </div>
                <div className="box">
                    <p className='FooterTitle'>Наш адрес</p>
                    <p className='FooterText'>Казахстан, <br /> город Астана.</p>

                </div>
                <div className="box">
                    <p className='FooterTitle'>Информация</p>
                    <p className='FooterText'>Доставка и оплата</p>
                    <p className='FooterText'>Гарантии</p>
                    <p className='FooterText'>Возврат товара</p>
                </div>
            </div>
            <div className="ps">
                <p className='FooterText'>© 2024 Golden Soft All rights reserved.</p>
            </div>
        </div>
        
    );
};
  
export default FamousProducts;
import React from 'react';
import returnBox from "../assets/images/whyUs/returnBox.png"
import likeBox from "../assets/images/whyUs/likeBox.png"

const WhyUs = () => {

    return (
        <div className='whyUsArea'>
            <div className="numbers">
                <div className='flexSpBw centered'>
                    <div>
                        <b>5,567</b>
                        <p>Счастливых клиентов</p>
                    </div>
                    <div>
                        <b>1245</b>
                        <p>Продуктов на выбор</p>
                    </div>
                    <div>
                        <b>372</b>
                        <p>Продаж в день</p>
                    </div>
                    <div>
                        <b>20</b>
                        <p>Лет на рынке</p>
                    </div>
                </div>
            </div>
            


            <p className='titleTxt centered'>Почему GoldenService? </p>

            <div className="whyUs divPadding flexSpBw">

                <div>
                    <img src={returnBox} alt="box" />
                    <p>Возврат удвоенной стоимости каждого замка в случае брака. </p>
                </div>
                <div>
                    <img src={likeBox} alt="like" />
                    <p>Наносим ваш логотип компании на наш продукт </p>
                </div>
                <div>
                    <img src={returnBox} alt="box" />
                    <p>Возврат удвоенной стоимости каждого замка в случае брака.  </p>
                </div>

            </div>
        </div>
        
    );
};
  
  export default WhyUs;
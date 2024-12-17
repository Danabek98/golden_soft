import React from 'react';
import soft1Img from "../assets/images/Categories/soft1.png"
import soft2Img from "../assets/images/Categories/soft2.png"
import soft3Img from "../assets/images/Categories/soft3.png"
import soft4Img from "../assets/images/Categories/soft4.png"




const Categories = () => {

    return (
        <div className='Categories divPadding'>
            <p className='titleTxt txtCenter'>Категории</p>
            <div className='content flexSpBw'>

                <div className="flexSpBw">
                    <div className="box">
                        <div className='productName'>
                            <p>Для отелей</p>
                            <button>Перейти</button>
                        </div>
                        <div className='productImg'>
                            <img src={soft1Img} alt="first" />
                        </div>
                    </div>

                    <div className="box">
                        <div className='productName'>
                            <p>Для шкафчиков</p>
                            <button>Перейти</button>
                        </div>
                        <div className='productImg'>
                            <img src={soft2Img} alt="first" />
                        </div>
                    </div>
                </div>
                <div className="flexSpBw">
                    <div className="box">
                        <div className='productName'>
                            <p>Для офисов</p>
                            <button>Перейти</button>
                        </div>
                        <div className='productImg'>
                            <img src={soft3Img} alt="first" />
                        </div>
                    </div>

                    <div className="box">
                        <div className='productName'>
                            <p>Замки для дома</p>
                            <button>Перейти</button>
                        </div>
                        <div className='productImg'>
                            <img src={soft4Img} alt="first" />
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn centered'>Все категории</button>
        </div>
        
    );
};
  
export default Categories;
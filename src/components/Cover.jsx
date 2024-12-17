import React, { useState } from 'react';
import firstImg from "../assets/images/coverImg/first.png"
import secondImg from "../assets/images/coverImg/second.png"
import thirdImg from "../assets/images/coverImg/third.png"



const products = [
    {
      id: 1,
      name: "Golden Soft \n GS-200Z-5 для офиса",
      description: 'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. \n \n Подходит для установки на деревянную/межкомнатную дверь.',
      price: 100,
      image: firstImg,
    },
    {
      id: 2,
      name: "Product 2",
      description: "",
      price: 150,
      image: secondImg,
    },
    {
      id: 3,
      name: "Product 3",
      description: "",
      price: 200,
      image: thirdImg,
    },
  ];
//   {products.map(product => (
//     <div key={product.id} className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>Price: ${product.price}</p>
//     </div>
//   ))}

  
const Cover = () => {

  const [currentIndex, setCurrentIndex] = useState(0); // Хук для отслеживания текущего индекса товара

  // Функция для перелистывания назад
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Функция для перелистывания вперед
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    // Область где показывает популярные продукты
    // divPadding задает рамку 100пикселей
    // flexSpBw задает Флекс Спейс битвин
    // у картинки свой размер
    <section className="cover divPadding">
      <div className="product centered flexSpBw">
        <img src={products[currentIndex].image} alt={products[currentIndex].name}/>

        <div className='coverRight flexSpBw'> 
          <div>
            <h2 style={{ whiteSpace: 'pre-line'}} className='titleTxt'>{products[currentIndex].name}</h2>
            <p style={{ whiteSpace: 'pre-line', width: '287px'}} className='descriptionTxt'>{products[currentIndex].description}</p>
            <p className='descriptionTxt'>Цена:</p>
            <p style={{ fontSize: '24pt', fontWeight: '600'}}>${products[currentIndex].price}</p>
            <button className='btn' onClick={() => console.log("buy")}>Добавить в корзину</button>
          </div>
        </div>
      </div>

      <div className="productChange centered flexSpBw">
        <pre onClick={handlePrevClick} className='arrow'>&#8249;</pre>
        <p className={currentIndex === 0? 'activeCircle' : ' '}>&bull; </p>
        <p className={currentIndex === 1? 'activeCircle' : ' '}>&bull; </p>
        <p className={currentIndex === 2? 'activeCircle' : ' '}>&bull; </p>
        <pre onClick={handleNextClick} className='arrow'>&#8250;</pre>
      </div>
    </section>
  );
};

export default Cover;

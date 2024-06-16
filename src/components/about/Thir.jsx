import React, { useState, useEffect } from 'react';
import './thir.css';

const Thir = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [
    { id: 1, image: 'https://miro.medium.com/v2/resize:fit:1200/1*M_mn2rD8JR6oV9mDDbB3Lw.jpeg', title: 'Creativity and Conscience', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit totam tenetur unde esse <br />mollitia qui facere eum,' },

    { id: 2, image: 'https://cdn0.weddingwire.in/vendor/0232/3_2/960/jpg/wedding-planners-skylight-event-management-haldi-decor-6_15_430232-166808165248182.jpeg', title: 'Creativity and Conscience', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit totam tenetur unde esse <br />mollitia qui facere eum,' },

    { id: 3, image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-1051557,resizemode-75,msid-103494099/jobs/c-suite/innovation-and-creativity-fostering-innovative-leadership.jpg', title: 'Creativity and Conscience', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit totam tenetur unde esse <br />mollitia qui facere eum,' },

    { id: 4, image: 'https://media.licdn.com/dms/image/C4D12AQHy_qL23HfudA/article-cover_image-shrink_600_2000/0/1564658413161?e=2147483647&v=beta&t=_hkjEtZcdt2_cCClmfVC8g7EzwcVx6D5PDSvyrPXSGI', title: 'Creativity and Conscience', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit totam tenetur unde esse consectetur adipisicing elit. Modi, impedit totam tenetur mollitia qui facere eum,' },

    { id: 5, image: 'https://imageio.forbes.com/specials-images/imageserve/645a7ae3e53917375944914e/AI-Chatbot-smart-digital-customer-service-application-concept-/960x0.jpg?height=447&width=711&fit=bounds', title: 'Creativity and Conscience', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit totam tenetur unde esse consectetur adipisicing elit. Modi, impedit totam tenetur mollitia qui facere eum,' },

    { id: 6, image: 'https://media.licdn.com/dms/image/D5612AQGcMgwoY2yQhA/article-cover_image-shrink_600_2000/0/1696501194360?e=2147483647&v=beta&t=0RFQFdFPe5sLA7S5F9KRoFB-GHjSWXwwqWAXVaTfEVo', title: 'Creativity and Conscience', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit totam tenetur unde esse consectetur adipisicing elit. Modi, impedit totam tenetur mollitia qui facere eum,' },

    { id: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjNzezpvzna47Rud3F5CUK1Xjo4F6sV90HH2pgug09S0gyIGeoI_of28isTCwIKMgxu4&usqp=CAU', title: 'Creativity and Conscience', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit totam tenetur unde esse consectetur adipisicing elit. Modi, impedit totam tenetur mollitia qui facere eum,' },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.image} alt={item.title} />
            <div className="carousel-caption">
              <h1 style={{fontSize:'50PX',color:'#00F7B8'}}>{item.title}</h1><br />
              <p style={{fontSize:'20px'}}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Thir;
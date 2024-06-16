


import React from 'react';
import './Thir.css';

const Thir = () => {
  const items = [
    { title: 'Brand Experiences', img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D' },
    
    { title: 'Conferences', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D' },

    { title: 'Dinners & Receptions', img: 'https://images.unsplash.com/photo-1603298573248-3e98441a0d6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8' },

    { title: 'Exhibitions', img: 'https://images.unsplash.com/photo-1561490497-43bc900ac2d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' },

    { title: 'Private Events  ', img: 'https://plus.unsplash.com/premium_photo-1713720664635-ac557cf7465d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpdmF0ZSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D' },

    { title: 'Wedding', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D' },

    { title: 'Birthday Party', img: 'https://media.istockphoto.com/id/1452134221/photo/happy-birthday-background-decoration-with-balloons-and-lights-for-birthday-celebration-fancy.webp?b=1&s=170667a&w=0&k=20&c=wQlVhCB62uX9lcyxBUgyu5Oyo7NNlzZTWEHy1ntcfic=' },

    { title: 'Live Shows', img: 'https://images.unsplash.com/photo-1598387993240-44b625d97d7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2ZSUyMHNob3d8ZW58MHx8MHx8fDA%3D' }
  ];

  return (
  <div style={{position:'relative',Top:'2000px'}}>
    <div className="grid-container">
      {items.map((item, index) => (
        <div key={index} className="grid-item">
          <div className="image-container">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="overlay">
            <h2>{item.title}</h2>
            <button className="discover-more"><a href="">Discover More</a></button>
          </div>
        </div>
      ))}
    </div></div>
  );
};

export default Thir;

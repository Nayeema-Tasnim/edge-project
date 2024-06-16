import React from 'react';
import { Parallax } from 'react-parallax';
import FormComponent from './Form.jsx';
import london from '../../assets/london.avif';
import './four.css';

const App = () => {
  return (
    <div className="Apppara">
      <Parallax
        bgImage={london}
        strength={500} style={{maxHeight:'400px'}}
      >
        <div className='paralax'>
          <div className="par"><h1> <span style={{color:'#00F7B8'}}>MEET OUR LONDON</span> </h1>
         <p style={{color:'greenyellow'}}>VENUE SEARCH</p></div> 
          <div className="form-container">
           
           
            <FormComponent />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default App;
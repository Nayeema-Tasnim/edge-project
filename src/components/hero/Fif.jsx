import React, { useState } from 'react';
import VideoCard from './VideoCard';
import './Fif.css';

const Fif = () => {
  const [videos] = useState([
    {
      id: 1,
      
      
      url: 'https://www.youtube.com/watch?v=wAENwCURMmQ'
    },
    {
      id: 2,
     
     
      url: 'https://www.youtube.com/watch?v=oed78sCzWFY'
    },
    {
      id: 3,
     
      
      url: 'https://www.youtube.com/watch?v=0T-Np-hEL1Y'
    },

    {
        id: 4,
        
        
        url: 'https://www.youtube.com/watch?v=5pWySZWMpvI'
      },

      {
        id: 5,
        
        
        url: 'https://www.youtube.com/watch?v=N8tnM9KyLos'
      },

      {
        id: 6,
       
        
        url: 'https://www.youtube.com/watch?v=_IhFKSV-UQU'
      },

      {
        id: 7,
       
        
        url: 'https://www.youtube.com/watch?v=wAENwCURMmQ'
      },
      {
        id: 8,

        
        url: 'https://www.youtube.com/watch?v=SMWjenqcMno'
      },
      
  ]);

  return (
    <div className="video-gallery">
      
      {videos.map((video) => (
        
        <VideoCard className="v" key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Fif;
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoCard.css';



const VideoCard = ({ video }) => {
  const [loveCount, setLoveCount] = useState(0);

  const handleLove = () => {
   

    setLoveCount(loveCount + 1);
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(video.url);
    const text = encodeURIComponent(`Check out this video: ${video.title}`);
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <div className="video-card">
    
     
      <p>{video.description}</p>
      <ReactPlayer url={video.url} controls width="100%" height='150px' className="videocs" />
      <div className="video-card-actions">
        <button className='bt' onClick={handleLove}><i className="fa-solid fa-heart" /> ({loveCount})</button>
        <button className='bt'onClick={() => handleShare('twitter')}>Share on  <i className="fa-brands fa-twitter" /></button>
        <button className='bt' onClick={() => handleShare('facebook')}>Share on <i className=" fa-brands fa-square-facebook" /> </button>
        
      </div>
    </div>
  );
};

export default VideoCard;
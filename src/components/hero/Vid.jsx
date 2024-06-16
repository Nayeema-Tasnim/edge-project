import video from '../../assets/vi.mp4'
import './video.css';

const Vid = () => {
  return (
    <div className='vid'>

      <video src={video} autoPlay loop muted></video>
    </div>
  )
}

export default Vid

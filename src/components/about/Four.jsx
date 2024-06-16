import './four.css'
    import video from '../../assets/vi.mp4'

const Four = () => {
  return (
    <div className='for'>
  
     
         <video src={video} controls></video>
          <div style={{paddingLeft:'100px',paddingBottom:'100px'}} className="forh">
        <h1 style={{fontSize:'45px',color:'#00F7B8'}}>Life in x</h1><br /><br />
        <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Nobis ullam architecto quia neque soluta non iste beatae, doloribus quis voluptatibus ad quod. <br />Dolorem labore quis ex, dolores a asperiores voluptas placeat similique iusto mollitia hic. Optio <br /> <br /><span style={{color:'#00F7B8'}}>natus explicabo neque, veritatis rem earum voluptates facilis, br <br /> .gug fyu corrupti, aliquam animi incidunt est eveniet!</span></p>
      </div>
    </div>
  )
}

export default Four

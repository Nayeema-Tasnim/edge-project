


import Nav from '../components/nav/Nav.jsx';
import Video from '../components/hero/Vid.jsx';
import Sec from '../components/hero/Sec.jsx';
import Thir from '../components/hero/Thir.jsx';
import Four from '../components/hero/Four.jsx';
import Fif from  '../components/hero/Fif.jsx';
import Sev from  '../components/hero/Sev.jsx';
import Footer from  '../components/hero/Footer.jsx';




const Home = () => {
  return (
    <div>
      <Nav />
  <Video />
 
  <Sec />
  <Thir />
  <Four />
  {/* <h1 style={{textAlign:'center',position:'relative',top:'1100px',fontSize:'40px',fontWeight:'700',color:'green'}}>Our Work</h1><br /><br /> */}
<Fif />
<Sev />
<Footer/>
    </div>
  );
};

export default Home;

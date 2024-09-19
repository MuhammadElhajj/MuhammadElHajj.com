import Home from './Home/Home';
import './App.css';
import './Home/Home.css'
import './About/About.css'
import './Works/Work.css'
import About from './About/About';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import Work from './Works/Work';
import Services from './Services/Services';
import './Services/Services.css'
import Contact from './Contact Me/Contact';
import './Contact Me/Contact.css'
import './Footer/Footer.css'
import Footer from './Footer/Footer';
import { FaAnglesUp } from 'react-icons/fa6';
import MenuHomeData from './Home/MenuHomeData';
import { FaAngleDown } from 'react-icons/fa';
import { HiBars4 } from 'react-icons/hi2';
import Nav from './Home/Nav';
import { FaSearch } from 'react-icons/fa';
import lOGO from './Image/squarespace-logo_icon-icons.com_57069.png'





function App({ OTHERwORK }) {

  const [showMore, setShowMore] = useState(false)
  // const [width, setWidth] = useState(true)
  const [scrollY, setScrollY] = useState(window.scrollY)
  const [style, setStyle] = useState("none")
  const [dispaly, setDispaly] = useState("none")

  function openSideabr() {
    setDispaly('flex')
}
function closeSidebar() {
  setDispaly('none')
}
  function ShowMore() {
    setShowMore(prev => !prev)
  }

  function Scroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }



  useEffect(() => {

    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
      scrollY > 132 ? setStyle("block") : setStyle("none")

    })

  })

  return (
    <div className="App" >

      <header className='Header d-flex align-items-center justify-content-space-between'  >
        <h1 className='Header-Logo'><img src={lOGO} alt='Downaload' /></h1>

        <div className='Header-Menu'>
          {
            //    !mode ? <BsSun onClick={ChangeMode} style={{color : "#fff"}}/> : <BsMoonFill onClick={ChangeMode} style={{color : "#fff"}}/>

            MenuHomeData.map((item) => <a className='Header-a fs-15' href={item.herf} id={item.id}>{item.name}<span><FaAngleDown /></span></a>)

          }
          <HiBars4 onClick={openSideabr} className='Hedaer-Bars' />

        </div>
      </header>
      <nav className='navBar'>
        <div className='empty-Nav'></div>
        <div>
          {
            Nav.map(item => <a className='Nav-item' href={item.url}>{item.name}</a>)
          }
        </div>
        <FaSearch className='search-icon' />
      </nav>
 
                    
                         {/* <div className='SideBar' style={{ right: `${right}%` }}> */}
                         <div className='SideBar' style={{display :`${dispaly}`}}>
                            <span className='CloseSideBArIcon' onClick={closeSidebar}>&times;</span>
                            {
                                MenuHomeData.map((item) => <a className='sidebar-Header-a' href={item.herf} id={item.id}>{item.icon}   {item.name}</a>)
                            }
                        </div>
                

      <Home/>
      <About />
      <Services />
      <Work showMore={showMore} click={ShowMore}/>
      <Contact />
      <Footer  />


      <button className='scroll' onClick={Scroll} style={{ display: style }}><FaAnglesUp className='anglesArrow' /></button>


    </div>

  );
}

export default App;

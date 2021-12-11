import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './sass/style.scss';
// import {i18n} from './translate/i18n'
import './componets/Settings';
import logo from "./img/logo/logo.png"; 
import Lottie from 'react-lottie'; // for our animations
import Logo from './componets/logo.json';
import carousel_1 from './img/slider_0.svg';
import Cube from './img/cube.png'
import Grid from './componets/Grid_section';
import NotFoundPage from './componets/404-error';
import Nav from './componets/header';
import AOS from 'aos'; 

import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

function App() {
 

  const Logo_animation = {
    loop: false,
    autoplay: true, 
    animationData: Logo,
  };
  
  
  return (
    <BrowserRouter>
      <Switch>
    <div className="App">
    <div className="websiteOverlay">
      <Lottie options={Logo_animation}
                height={520}
                width={530}
                style={{ left:"0", right:"0" }}
                />
     <p>Wellcome to Lane art Design...</p>
    </div>
     <section id="pageA">
     
     <Lottie options={Logo_animation}
                height={520}
                width={530}
                style={{ left:"0", right:"0" }}
                />
     
    </section>
      <section id="pageB">
      <div className="Container_orcamento">
            <p className="paragraph_1">
            Design Gráfico <br/>      
            
            Para qualquer tipo de necessidade
            </p>
            <button className="btn_m1"> Orçamento </button>
        </div>
        <div className="waterfall">
          <div className="waterfall_drops _1" />
          <div className="waterfall_drops _2" />
          <div className="waterfall_drops _3" />
          <div className="waterfall_drops _4" />
          <div className="waterfall_drops _5" />
          <div className="waterfall_drops _6" />
          <div className="waterfall_drops _7" />
          <div className="waterfall_drops _8" />
          <div className="waterfall_drops _9" />
          <div className="waterfall_drops _10"/>
        </div>
        
        <div className="carousel" id="carousel">
          <figure>
            <img src={carousel_1} alt="carousel" />
            <img src={carousel_1} alt="carousel" />
            <img src={carousel_1} alt="carousel" />
            {/* <img src={carousel_1} alt="carousel" /> */}
          </figure>
          
          <nav>
            <button className="nav prev"/>
            <button className="nav next"/>
          </nav>
          </div>

        {/* <Carousel/> */}
        
        <div className="container"  id="#suport">
            <h1 className="UX" data-aos="fade-right"> UX/UI Design</h1>
            <p>
              UX Design é Muito Importante Para Garantir o Sucesso Da Sua Empresa!
            </p>
            <button className="btn"> Veja Mais</button>
            <button className="btn-or"> Orçamento</button>
          
          </div>
      </section>
      <section id="pageC">
      <div className="container_left">
            <div className="UX" data-aos="fade-left">3D,2D ilustrações</div>
            <p>
              Animações e ilustrações personalizadas  para humanizar o seu negocio em suas mídias sociais.
            </p>
            <button className="btn"> Veja Mais</button>
            <button className="btn-or"> Orçamento</button>
      </div>
      <div className="grid_Second">
      <div>
        <div className="div2">
          <div className="carousel" id="carousel">
            <figure>
              <img src={Cube} alt="Cube 3D" />
              <img src={Cube} alt="carousel" />
              <img src={Cube} alt="carousel" />
            </figure>
            
            <nav className="nevsecond">
              <button className="nav prev"/>
              <button className="nav next"/>
            </nav>
          </div>
        </div>
        </div>
      </div>
      <Grid/>
      <div className="megafooter" data-aos="fade-up"
     data-aos-duration="3000">

        <nav className="foot_p">
          SOBRE 
          <p className="p-chill">
              Pessoas apaixonadas pelo que fazem e dispostas a ajudá-lo a alcançar o seu sucesso!
            Oferecemos soluções inovadoras para que pessoas tenham a 
            oportunidade de se desenvolver de forma contínua e arrojada. 
            Além de valorizar o cliente através de um atendimento especial e diferenciado.
          </p> 
        </nav>
      </div>
      <div id="footer">
      
        <div>
          <a href="#suport">Suport</a> 
        </div>
        <div>
          <img
            src={logo}
            alt="logo"
            width="120px"
            style={{ marginTop: "-15px" }}
          />
        </div>
        <div>
          <a href="https://github.com/Lane-Art-Design/website"> Source Code </a>
        </div>
      </div>
    </section>
    <Nav />
  </div>
  
  
    <Route path="/404" component={NotFoundPage}/>
    <Redirect to="/404" />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
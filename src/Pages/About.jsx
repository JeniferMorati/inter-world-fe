import styles from './Travel.module.css'
import aboutstyle from './About.module.css'
// import sliderimg from '../img/about/projections-animate.svg'
import values from '../img/about/values.png'

import missao from '../img/about/mission.png'
import vision from '../img/about/visao.png'
import CardAbout from '../CardAbout.jsx'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"




const Home = () => {
  return (
    <main>

<section id="slider" className=" ">
        <div className={`container pt-5  ${aboutstyle.marginslide}`}>
          <div className={`row  d-flex justify-content-center ${styles.containerslider}`}>
            <div className={`col-lg-4 col-md-6 align-self-center mb-md-0 mb-4 ${styles.textslider}`}>
              <h1 className={styles.h1}>Conheça a Interworld</h1>
              <h4 className={`mb-4 mt-3`}>Conheça os destinos incríveis <br/> que a InterWorld oferece!</h4>
            <div className={`${styles.divbuttons}`}>
              <a
                href="#"
                className={`button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2 ${styles.buttons}`}
              >Contato</a>
              </div>
            </div>
            <div className={`col-lg-8 col-md-4 text-center ${styles.divimg}`}>
              {/* <img src={sliderimg} className={`img-fluid ${styles.img}`}/> */}
            </div>
          </div>
          </div>
      </section>
      <section className=" pt-4">
          <h2 className={` ${aboutstyle.storyh2}  mt-5  text-center text-uppercase font-weight-bold`}>Sobre nós</h2>
          <div className={` ${aboutstyle.storyp2} p-2 mt-3`}>
          <p className={`mt-2 d-flex ${aboutstyle.storytext} text-center`}>Fundamos a Interworld em 2015 com o objetivo de oferecer não apenas intercâmbios, e sim projetos de vida. O projeto da Interworld começou pequeno,
              com apenas 5 integrantes e hoje contamos com mais de 100 profissionais para atender todas as necessidades de nossos alunos, com total dedição e comprometimento.
              Nossa meta é transformar o intercâmbio em uma experiência única na vida do intercambista e uma grande oportunidade profissional.</p>
            </div>
      </section>
      <section>
        <CardAbout img={vision}></CardAbout>
  

        

      </section>
     
    </main>
  
  
  )
};

export default Home;


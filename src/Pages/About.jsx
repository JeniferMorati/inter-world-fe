import React from 'react';
import { useDictionary } from "../hooks/useDictionary";
import styles from './Travel.module.css'
import aboutstyle from '../Pages/About.module.css'
import timeline from '../Pages/timeline.module.css'
import sliderimg from '../img/about/slider.png'
import values from '../img/about/values.png'
import missao from '../img/about/mission.png'
import vision from '../img/about/vision.png'
import CardAbout from '../CardAbout'




const Home = () => {
  const dictionary = useDictionary().about;
  return (
   
    <body>
    <main>

<section className=" ">
        <div className={`container  ${aboutstyle.marginslide}`}>
          <div className={`row  d-flex justify-content-center ${styles.containerslider}`}>
            <div className={`col-lg-4 col-md-6 align-self-center mb-md-0 mb-4 pt-3 ${styles.textslider}`}>
              <h1 className={styles.h1} >{dictionary?.title}</h1>
              <h4 className={`mb-4 mt-3`}>{dictionary?.description1} <br /> {dictionary?.description2}</h4>
            <div className={`${styles.divbuttons}`}>
              <a
                 path=""
                className={`button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2 disabled  ${styles.buttons} ${styles.button1}`} style={{backgrounColor:"#b23cfd"}}
              >{dictionary?.button}</a>
              </div>
            </div>
            <div className={`col-lg-8 col-md-4 text-center ${styles.divimg}`}>
              <img src={sliderimg} className={`img-fluid ${styles.img}`} style={{width:"75%"}}/>
            </div>
          </div>
          </div>
      </section>
      <section className=" pt-4">
          <h2 className={` ${aboutstyle.storyh2}  mt-5  text-center text-uppercase font-weight-bold`}>{dictionary?.aboutus}</h2>
          <div className={` ${aboutstyle.storyp2} p-2 mt-3`}>
          <p className={`mt-2 d-flex ${aboutstyle.storytext} text-center`}>{dictionary?.textaboutus}</p>
            </div>
      </section>
      <section>
        <CardAbout img1={missao} img2={vision} img3={values} ></CardAbout>
  

        

      </section>

      
    </main>
    </body>
  
  
  )
};

export default Home;


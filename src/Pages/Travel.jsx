import React from 'react';
import sliderimg from '../img/travel/slidertravel.png'
import CardTravel from '../CardTravel.jsx'
import styles from '../Pages/Travel.module.css'
import { useDictionary } from "../hooks/useDictionary";
import imagecard1 from '../img/travel/img1.png'
import img2 from '../img/travel/img2.png'
import img3 from '../img/travel/img3.png'
import img4 from '../img/travel/img4.png'
import img5 from '../img/travel/img5-toronto.png'
import img6 from '../img/travel/img6-montreal.png'
import img7 from '../img/travel/img7-victoria.png'
import img8 from '../img/travel/img-vancouver.png'
import img9 from '../img/travel/img9-londres.png'
import img10 from '../img/travel/img10-liverpool.png'
import img11 from '../img/travel/img11-birmingham.png'
import img12 from '../img/travel/img12.png'
import img13 from '../img/travel/img13.png'
import img14 from '../img/travel/img14.png'
import img15 from '../img/travel/img15.png'
import img16 from '../img/travel/img16.png'
import img17 from '../img/travel/img17.png'
import img18 from '../img/travel/img18.png'
import img19 from '../img/travel/img19.png'
import img20 from '../img/travel/img20.png'



const Home = () => {
  const dictionary = useDictionary().travel;
  return (
    <main>

      <section className="pl-n-5">
        <div className="container " id={styles.margin}>
          <div className={`row d-flex ${styles.containerslider}`}>
            <div className={`col-lg-4 col-md-6 align-self-center mb-md-0 mb-4 ${styles.textslider}`}>
              <h1 className={styles.h1}> {dictionary?.title} <br /> {dictionary?.title1}</h1>
              <h4 className={`mb-4 mt-3 text-xs-center `}>{dictionary?.description} <br /> {dictionary?.description2}</h4>
            <div className={`${styles.divbuttons}`}>
              <a
                href="/orcamentos"
                className={`button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2 ${styles.buttons} ${styles.button1}`} 
          
              > {dictionary?.button1} </a>
              {/* <a
                href="#"
                className={`button btn btn-outline-primary button-primary-outline d-md-inline-block d-block ${styles.buttons} ${styles.buttoncontact}`}
              >{dictionary?.button2}</a> */}
              </div>
            </div>
            <div className={`col-lg-8 col-md-4 text-center ${styles.divimg}`}>
              <img src={sliderimg} className={`img-fluid ${styles.img}`}/>
            </div>
          </div>
          </div>
      </section>
      <section className={`container ${styles.section2}`}>
        <div className='row d-flex justify-content-center'>
        <CardTravel pais={dictionary?.countrie1} cidade1="Boston" cidade1p={dictionary?.city1p}
        cidade2= {dictionary?.city2} cidade2p= {dictionary?.city2p}
        cidade3="Chicago" cidade3p= {dictionary?.city3p}
        cidade4="Los Angeles" cidade4p = {dictionary?.city4p}
        image1 ={imagecard1} image2={img2} image3={img3} image4={img4}/>

        <CardTravel pais={dictionary?.countrie2} cidade1="Toronto" cidade1p={dictionary?.city5p} cidade2="Montreal" cidade2p={dictionary?.city6p} cidade3="Victoria" cidade3p={dictionary?.city7p} cidade4="Vancouver"  cidade4p={dictionary?.city8p} image1 ={img5} image2= {img6}
        image3={img7} image4={img8}/>

        <CardTravel pais={dictionary?.countrie3} cidade1={dictionary?.city9} cidade1p={dictionary?.city9p} image1={img9}
        cidade2="Liverpool" cidade2p={dictionary?.city10p} image2={img10}
        cidade3 ="Brigha"  cidade3p={dictionary?.city11p} image3={img11}
        cidade4 ="Cambridge" cidade4p={dictionary?.city12p} image4={img12} ></CardTravel>
        <CardTravel pais={dictionary?.countrie4} cidade1='Madrid' cidade1p={dictionary?.city13p} image1={img13}
        cidade2='Barcelona'cidade2p={dictionary?.city14p} image2={img14}
        cidade3='Sevilha'cidade3p={dictionary?.city15p} image3={img15}
        cidade4='Granada'cidade4p={dictionary?.city16p} image4={img16}></CardTravel>
        <CardTravel pais={dictionary?.countrie5} cidade1='Paris'cidade1p={dictionary?.city17p} image1={img17}
        cidade2='Marselha'cidade2p={dictionary?.city18p} image2={img18}
        cidade3='Lyon'cidade3p={dictionary?.city19p} image3={img19}
        cidade4='Nice'cidade4p={dictionary?.city20p} image4={img20}></CardTravel>
        </div>
      </section>
    </main>
  )
};

export default Home;
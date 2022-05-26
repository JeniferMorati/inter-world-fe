import React from "react";
// context
import { useDictionary } from "../hooks/useDictionary";
// CSS
import styles from "../Pages/Travel.module.css";
import sliderimg from "../img/home/slider.png";

// components
import LanguageToggle from "../components/LanguageToggle";
import Footer from "../components/Footer";
import { MDBContainer } from "mdb-react-ui-kit";
import Faq from "../components/Faq";
import CardFullImage from "../components/CardFullImage";
import Reating from "../components/Rating";
import { useNavigate } from "react-router";

function Home() {
  const dictionary = useDictionary().home;
  const navigateTo = useNavigate();

  return (
    <MDBContainer>
      <section className="pl-n-5">
        <div className="container">
          <div className={`row d-flex ${styles.containerslider}`}>
            <div
              className={`col-lg-4 col-md-6 align-self-center mb-md-0 mb-4 ${styles.textslider}`}
            >
              <h1 className={styles.h1}>
                {" "}
                {dictionary?.slidertext1} <br /> {dictionary?.slidertext2}{" "}
              </h1>
              <h4 className={`mb-4 mt-4`}>
                {dictionary?.description1} <br /> {dictionary?.description2}
              </h4>
              <div className={`m-0 ${styles.divbuttons}`}>
                <a
                  onClick={() => navigateTo("/orcamentos")}
                  className={`button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2 ${styles.buttons} ${styles.button1}`}
                >
                  {" "}
                  {dictionary?.button1}{" "}
                </a>
                {/* <a
                href="#"
                className={`button btn btn-outline-primary button-primary-outline d-md-inline-block d-block ${styles.buttons} ${styles.buttoncontact}`}
              >{dictionary?.button2}</a> */}
              </div>
            </div>
            <div className={`col-lg-8 col-md-4 text-center ${styles.divimg}`}>
              <img
                src={sliderimg}
                className={`img-fluid ${styles.img}`}
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <h3 className="text-center mb-4 pb-2 text-secondary fw-bold">
          {dictionary?.title}
        </h3>
        <div className="row">
          <CardFullImage
            image="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.webp"
            height="250"
          />
          <CardFullImage
            image="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
            height="250"
          />
          <CardFullImage
            image="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
            height="250"
          />
        </div>
      </section>
      <Faq />
      <section>
        <div className="row d-flex justify-content-center">
          <div className="d-flex flex-column col-md-10 col-xl-8 text-center">
            <div>
              <h3 className="mb-4">Depoimentos</h3>
            </div>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Conheça alguns depoimentos de pessoas que realizaram seu sonho de
              viagem pelo mundo pela nossa agência.
            </p>
          </div>
        </div>

        <div className="row text-center mb-10">
          <Reating />
        </div>
      </section>
    </MDBContainer>
  );
}
export default Home;

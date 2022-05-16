// context
import { useDictionary } from "../hooks/useDictionary";

// components
import LanguageToggle from "../components/LanguageToggle";
import Footer from "../components/Footer";
import { MDBContainer } from "mdb-react-ui-kit";
import Faq from "../components/Faq";
import CardFullImage from "../components/CardFullImage";

function Home() {
  const dictionary = useDictionary().home;

  return (
    <MDBContainer>
      <section>
        <h3 className="text-center mb-4 pb-2 text-secondary fw-bold">
          {dictionary.title}
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
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">Testemunhos</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Conheça alguns depoimentos de pessoas que realizaram seu sonho de
              viagem pelo mundo pela nossa agência.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">Maria Smantha</h5>
            <h6 className="text-secondary mb-3">Desenvolvedor Web</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i> Muito bom, me ajudou há
              realizar meu sonho de viajar para o Canada, 5 estrelas!
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">Lisa Cudrow</h5>
            <h6 className="text-secondary mb-3">Designer gráfico</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i> Otimo site para
              realizar sua viagem para o exterior, atendimento rapido e
              orçamento bem planejado.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">John Smith</h5>
            <h6 className="text-secondary mb-3">Especialista em Marketing</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i> fizemos uma otima
              viagem para o Estados Unidos graças ao site, uma otima
              oporturnidade para realizar seu sonho de viagem pelo mundo, 5
              estrelas, obrigado!
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MDBContainer>
  );
}
export default Home;

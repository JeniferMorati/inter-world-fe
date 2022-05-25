// context
import { useDictionary } from "../hooks/useDictionary";

// components
import LanguageToggle from "../components/LanguageToggle";
import Footer from "../components/Footer";
import { MDBContainer } from "mdb-react-ui-kit";
import Faq from "../components/Faq";
import CardFullImage from "../components/CardFullImage";
import Reating from "../components/Rating";

function Home() {
  const dictionary = useDictionary().home;

  return (
    <MDBContainer>
      <section>
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

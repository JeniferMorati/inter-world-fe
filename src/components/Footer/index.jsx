import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

// hooks
import { useDictionary } from "../../hooks/useDictionary";
import { useNavigate } from "react-router";

export default function Footer() {
  const dictionary = useDictionary().footer;
  const navigateTo = useNavigate();

  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted mt-5 d-flex flex-column"
    >
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://wa.me/message/UV2WL52EK66EI1"
        style={{
          position: "fixed",
          width: "60px",
          height: "60px",
          bottom: "40px",
          left: "40px",
          backgroundColor: "#25d366",
          color: "#FFF",
          borderRadius: "50px",
          textAlign: "center",
          fontSize: "30px",
          boxShadow: "1px 1px 2px #888",
          zIndex: "1000",
        }}
        target="_blank"
      >
        <i style={{ marginTop: "16px" }} className="fa fa-whatsapp"></i>
      </a>
      <section className="d-flex justify-content-center justify-content-lg-between">
        <div className="me-5 d-none d-lg-block"></div>
      </section>

      <section className="mt-5">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 color="></i>InterWorld
              </h6>
              <p>{dictionary.aboutUs}</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <a onClick={() => navigateTo("/")} className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a onClick={() => navigateTo("/sobre")} className="text-reset">
                  Sobre
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigateTo("/orcamentos")}
                  className="text-reset"
                >
                  Orçamento
                </a>
              </p>

              <p>
                <a
                  onClick={() => navigateTo("/destinos")}
                  className="text-reset"
                >
                  Destinos
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p>
                <i className="fas fa-home me-3"></i> Rua Marechal Deodoro,
                Taquaritinga, SP
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                Interworldcontato@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 34
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 23
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4 w-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold">InterWorld.com</a>
      </div>
    </MDBFooter>
  );
}

import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

// hooks
import { useDictionary } from "../../hooks/useDictionary";

export default function Footer() {
  const dictionary = useDictionary().footer;

  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted mt-5"
    >
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
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/sobre" className="text-reset">
                  Sobre
                </a>
              </p>
              <p>
                <a href="/orçamentos" className="text-reset">
                  Orçamento
                </a>
              </p>

              <p>
                <a href="/destinos" className="text-reset">
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
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold">InterWorld.com</a>
      </div>
    </MDBFooter>
  );
}

import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import aboutstyle from "./Pages/About.module.css";
import { useDictionary } from "../src/hooks/useDictionary";

function CardAbout({ img1, img2, img3 }) {
  const dictionary = useDictionary().about;
  return (
    <MDBContainer>
      <section className="team-section text-center my-5">
        <MDBRow className={` ${aboutstyle.cardmargin} text-center`}>
          <MDBCol
            md="4"
            className={`mb-md-0 mb-5 shadow-sm p-3 mb-5 bg-white rounded`}
          >
            <div>
              <div className="mx-auto">
                <img
                  src={img1}
                  alt=""
                  className={`${aboutstyle.img}  img-fluid`}
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                {dictionary?.mission}
              </h4>
              <p className="font-weight-normal dark-grey-text">
                <div className=" pr-2" />
                {dictionary?.missionp}
              </p>
            </div>
          </MDBCol>
          <MDBCol
            md="4"
            className="mb-md-0 mb-5 shadow-sm p-3s mb-5 bg-white rounded mt-1"
          >
            <div>
              <div className="mx-auto mt-2">
                <img
                  src={img2}
                  alt=""
                  className={`${aboutstyle.img}  img-fluid`}
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                {dictionary?.vision}
              </h4>
              <p className="font-weight-normal dark-grey-text">
                <div className=" pr-2" />
                {dictionary?.visionp}
              </p>
            </div>
          </MDBCol>
          <MDBCol
            md="4"
            className="mb-md-0 mb-5 shadow-sm p-3 mb-5 bg-white rounded"
          >
            <div>
              <div className="mx-auto">
                <img
                  src={img3}
                  alt=""
                  className={`${aboutstyle.img}  img-fluid`}
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                {dictionary?.values}
              </h4>
              <p className="font-weight-normal dark-grey-text">
                <div className="fa pr-2" />
                {dictionary?.valuesp}
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}
export default CardAbout;

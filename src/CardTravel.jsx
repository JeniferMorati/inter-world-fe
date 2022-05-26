import styles from "./Pages/Travel.module.css";
import { useDictionary } from "../src/hooks/useDictionary";
import { useNavigate } from "react-router";
import styled from "styled-components";

function CardTravel({
  cidade1,
  cidade1p,
  cidade2,
  cidade2p,
  cidade3,
  cidade3p,
  cidade4,
  cidade4p,
  image1,
  image2,
  image3,
  image4,
  pais,
}) {
  const dictionary = useDictionary().travel;
  const navigateTo = useNavigate();

  const CardWrapper = styled.div`
    min-width: 220px;
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: top;
    transition: 0.35s linear;

    @media (max-width: 500px) {
      min-width: 120px;
    }
  `;

  return (
    <div>
      <section>
        <div className="row">
          <div className={`col-md-4 col-sm-2 mt-5 ${styles.paisdiv} `}>
            <h3>{pais}</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="row wrap gap-2">
          <CardWrapper
            className={`${styles.card} rounded-5 d-flex`}
            style={{
              backgroundImage: "url(" + image1 + ")",
              backgroundSize: "cover",
            }}
          >
            <div className={styles.cardp}>
              <p className={`${styles.cardpmargin}text-center text-uppercase `}>
                {cidade1}
              </p>
              <p className={styles.cardtext}>{cidade1p}</p>
              <a
                onClick={() => navigateTo("/orcamentos")}
                className={`button btn btn-primary button-primary d-md-inline-block d-block ${styles.button1}`}
              >
                {dictionary?.Budget}
              </a>
            </div>
          </CardWrapper>
          <CardWrapper
            className={`${styles.card} rounded-5 d-flex `}
            style={{
              backgroundImage: "url(" + image2 + ")",
              backgroundSize: "cover",
            }}
          >
            <div className={styles.cardp}>
              <p
                className={`${styles.cardpmargin}text-center text-uppercase mt-1 `}
              >
                {cidade2}{" "}
              </p>
              <p className={styles.cardtext}>{cidade2p}</p>
              <a
                onClick={() => navigateTo("/orcamentos")}
                className={`button btn btn-primary button-primary d-md-inline-block d-block ${styles.button1}`}
              >
                {dictionary?.Budget}
              </a>
            </div>
          </CardWrapper>
          <CardWrapper
            className={`${styles.card} ${styles.card2} rounded-5 d-flex`}
            style={{
              backgroundImage: "url(" + image3 + ")",
              backgroundSize: "cover",
            }}
          >
            <div className={styles.cardp}>
              <p
                className={`${styles.cardpmargin}text-center text-uppercase mt-2`}
              >
                {cidade3}
              </p>
              <p className={styles.cardtext}>{cidade3p}</p>
              <a
                onClick={() => navigateTo("/orcamentos")}
                className={`button btn btn-primary button-primary d-md-inline-block d-block ${styles.button1}`}
              >
                {dictionary?.Budget}
              </a>
            </div>
          </CardWrapper>
          <CardWrapper
            className={`${styles.card} ${styles.card2} rounded-5 d-flex`}
            style={{
              backgroundImage: "url(" + image4 + ")",
              backgroundSize: "cover",
            }}
          >
            <div className={styles.cardp}>
              <p
                className={`${styles.cardpmargin}text-center text-uppercase  mt-l`}
              >
                {cidade4}
              </p>
              <p className={styles.cardtext}>{cidade4p}</p>
              <a
                onClick={() => navigateTo("/orcamentos")}
                className={`button btn btn-primary button-primary d-md-inline-block d-block ${styles.button1}`}
              >
                {dictionary?.Budget}
              </a>
            </div>
          </CardWrapper>
        </div>
      </section>
    </div>
  );
}

export default CardTravel;

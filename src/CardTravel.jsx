import styles from './Pages/Travel.module.css'
import { useDictionary } from "../src/hooks/useDictionary";

function CardTravel({ pais, image1, image2, image3, image4, cidade1, cidade1p, cidade2, cidade2p, cidade3, cidade3p, cidade4,cidade4p}) {
    const dictionary = useDictionary().travel;

  return (
    <div>
      <section>
        <div className={`${styles.container} row`}>
          <div className={`col-md-4 col-sm-2 mt-5 ${styles.paisdiv} `} >
            <h3>{pais}</h3>
          </div>
        </div>
      </section>
      <section>
        <div className={`${styles.divcard} row `}>
          <div className={`${styles.card} rounded-5 d-flex`} style={{ backgroundImage: "url(" + image1 + ")" }}>
            <div className={styles.cardp}>
              <p className={`${styles.cardpmargin}text-center text-uppercase `}>{cidade1}</p>
              <p className={styles.cardtext}>{cidade1p}</p>
              <a href="/orcamentos" className={`button btn btn-primary button-primary d-md-inline-block d-block ${styles.button1}`}>{dictionary?.Budget}</a>
            </div>
          </div>
          <div className={`${styles.card} rounded-5 d-flex `} style={{ backgroundImage: "url(" + image2 + ")" }}>
            <div className={styles.cardp}>
              <p className={`${styles.cardpmargin}text-center text-uppercase mt-1 `}>{cidade2} </p>
              <p className={styles.cardtext}>{cidade2p}</p>
              <a href="/orcamentos" className={`button btn btn-primary button-primary d-md-inline-block d-block ${styles.button1}`}>{dictionary?.Budget}</a>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card2} rounded-5 d-flex`} style={{ backgroundImage: "url(" + image3 + ")" }}>
            <div className={styles.cardp}>
              <p className={`${styles.cardpmargin}text-center text-uppercase mt-2`}>{cidade3}</p>
              <p className={styles.cardtext}>{cidade3p}
              </p>
              <a href="/orcamentos" className={`button btn btn-primary button-primary d-md-inline-block d-block ${styles.button1}`}>{dictionary?.Budget}</a>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card2} rounded-5 d-flex`} style={{ backgroundImage: "url(" + image4 + ")" }}>
            <div className={styles.cardp}>
              <p className={`${styles.cardpmargin}text-center text-uppercase  mt-l`}>{cidade4}</p>
              <p className={styles.cardtext}>{cidade4p}
              </p>
              <a href="/orcamentos" className={`button btn btn-primary button-primary d-md-inline-block d-block ${styles.button1}`}>{dictionary?.Budget}</a>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default CardTravel
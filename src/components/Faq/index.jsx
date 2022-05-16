import React from "react";

// context
import { useDictionary } from "../../hooks/useDictionary";

// ::
const Faq = () => {
  const dictionary = useDictionary().faq;

  return (
    <section>
      <h3 className="text-center mb-4 pb-2 text-secondary fw-bold">FAQ</h3>
      <p className="text-center mb-5">{dictionary?.disclaimer}</p>
      <div className="row">
        {dictionary?.questions?.map((item) => (
          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-secondary">
              <i className={`${item.icon} text-secondary pe-2`}></i>
              {item.question}
            </h6>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;

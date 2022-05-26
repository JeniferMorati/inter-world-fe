import { useEffect } from "react";
import { useDictionary } from "../../hooks/useDictionary";
import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";

import { Checkbox } from "antd";

// firebase
import { dataBase, firebase } from "../../firebase";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import Illustration from "../../assets/illustrations/Booking";
import DatePicker from "../../components/DatePicker";

// atoms: components
import * as Atom from "./style";
import { selectorGetDestinations } from "../../store/selectors";
import { useRecoilValueLoadable } from "recoil";
import AutoComplete from "../../components/AutoComplete";
import BackdropLoading from "../../components/BackdropLoading";

// ::
const BudgetsContainer = () => {
  // recoil: loadable
  const destinationLoadable = useRecoilValueLoadable(selectorGetDestinations);
  const dictionary = useDictionary().budgets;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Atom.ContainerBudgets>
      <BackdropLoading open={destinationLoadable.state === "loading"} />
      <div>
        <Illustration />
        <Atom.ContainerForm>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                id="form6Example1"
                label={dictionary.name}
                color="secondary"
              />
            </MDBCol>
          </MDBRow>
          <MDBInput
            wrapperClass="mb-4"
            type="email"
            id="form6Example5"
            label={dictionary.email}
          />
          <MDBInput
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label={dictionary.phone}
          />
          <AutoComplete items={destinationLoadable?.contents} />
          <DatePicker />
          <MDBBtn className="my-4" type="submit" color="secondary" block>
            {dictionary.send}
          </MDBBtn>
        </Atom.ContainerForm>
      </div>
    </Atom.ContainerBudgets>
  );
};

export default BudgetsContainer;

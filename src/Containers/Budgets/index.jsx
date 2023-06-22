import { useEffect, useState } from "react";
import { useDictionary } from "../../hooks/useDictionary";
import {
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBModal,
  MDBSpinner,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
  MDBModalDialog,
} from "mdb-react-ui-kit";

import { Checkbox } from "antd";

// firebase
import FirebaseAuth from "../../firebase";

import Illustration from "../../assets/illustrations/Booking";
import DatePicker from "../../components/DatePicker";

// atoms: components
import * as Atom from "./style";
import { selectorGetDestinations } from "../../store/selectors";
import { useRecoilValueLoadable } from "recoil";
import AutoComplete from "../../components/AutoComplete";
import BackdropLoading from "../../components/BackdropLoading";
import { addDoc, collection } from "firebase/firestore";

const firebase = new FirebaseAuth();
const budgetStore = collection(firebase.appStore, "budgets");

// ::
const BudgetsContainer = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destinationSelected, setDestinationSelected] = useState({
    city: "",
    country: "",
    flag: "",
  });
  const [phone, setPhone] = useState("");

  // recoil: loadable
  const destinationLoadable = useRecoilValueLoadable(selectorGetDestinations);
  const dictionary = useDictionary().budgets;

  const sendBudget = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await addDoc(budgetStore, {
        name,
        email,
        phone,
        destination: {
          country: destinationSelected.country,
          city: destinationSelected.city,
          flag: destinationSelected.flag,
        },
      });

      setSuccessModal(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Atom.ContainerBudgets>
      <MDBModal
        closeOnEsc
        show={successModal}
        className="modal-dialog-centered"
      >
        <MDBModalDialog className="modal-dialog modal-dialog-centered">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Sucesso!</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <p>Entraremos em contato em breve!</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                onClick={() => setSuccessModal(false)}
                className="bg-danger"
              >
                Fechar
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <BackdropLoading
        open={destinationLoadable.state === "loading" || loading}
      />
      <div>
        <Illustration />
        <Atom.ContainerForm>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="form6Example1"
                label={dictionary.name}
                color="secondary"
              />
            </MDBCol>
          </MDBRow>
          <MDBInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            wrapperClass="mb-4"
            type="email"
            id="form6Example5"
            label={dictionary.email}
          />
          <MDBInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label={dictionary.phone}
          />
          <AutoComplete
            handleClickOption={setDestinationSelected}
            items={destinationLoadable?.contents}
          />
          <DatePicker />
          <MDBBtn
            onClick={(event) => sendBudget(event)}
            className="my-4"
            type="submit"
            color="secondary"
            block
          >
            {dictionary.send}
          </MDBBtn>
        </Atom.ContainerForm>
      </div>
    </Atom.ContainerBudgets>
  );
};

export default BudgetsContainer;

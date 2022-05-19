import { useEffect } from "react";
import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";

import { Checkbox } from "antd";

import Illustration from "../../assets/illustrations/Booking";
import DatePicker from "../../components/DatePicker";

// atoms: components
import * as Atom from "./style";
import { selectorGetCountrys } from "../../store/selectors";
import { useRecoilValueLoadable } from "recoil";
import AutoComplete from "../../components/AutoComplete";
import BackdropLoading from "../../components/BackdropLoading";

// ::
const BudgetsContainer = () => {
  // recoil: loadable
  const countryLoadable = useRecoilValueLoadable(selectorGetCountrys);

  return (
    <Atom.ContainerBudgets>
      <BackdropLoading open={countryLoadable.state === "loading"} />
      <div>
        <Illustration />
        <Atom.ContainerForm>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput id="form6Example1" label="Nome" color="secondary" />
            </MDBCol>
          </MDBRow>
          <MDBInput
            wrapperClass="mb-4"
            type="email"
            id="form6Example5"
            label="Email"
          />
          <MDBInput
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label="Telefone"
          />
          <AutoComplete items={countryLoadable?.contents} />
          <DatePicker />
          <Checkbox
            className="my-3"
            onChange={(e) => console.log(e.target.checked)}
          >
            Criar conta
          </Checkbox>

          <MDBBtn className="mb-4" type="submit" color="secondary" block>
            Enviar
          </MDBBtn>
        </Atom.ContainerForm>
      </div>
    </Atom.ContainerBudgets>
  );
};

export default BudgetsContainer;

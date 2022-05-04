// components: mdb
import { MDBDropdownItem, MDBDropdownLink } from "mdb-react-ui-kit";

// router
import { useNavigate } from "react-router";

// components: atoms
import * as Atom from "../atoms";

// ::
const NavigationDropdownLink = ({ name, route }) => {
  const navigate = useNavigate();

  return (
    <Atom.NavBarItems>
      <MDBDropdownItem>
        <MDBDropdownLink onClick={() => navigate(route)}>
          {name}
        </MDBDropdownLink>
      </MDBDropdownItem>
    </Atom.NavBarItems>
  );
};

export default NavigationDropdownLink;

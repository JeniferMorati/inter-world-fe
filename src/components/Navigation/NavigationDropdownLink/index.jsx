import React  from 'react';
// components: mdb

import { MDBBtn, MDBNavbarItem } from "mdb-react-ui-kit";

// router
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { useAppContext } from "../../../context";
import { atomCurrentUser } from "../../../store/atoms";

// ::
const NavigationDropdownLink = ({ name, route, variant }) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(atomCurrentUser);

  return (
    <Atom.NavBarItems>
      <MDBDropdownItem>
        <MDBDropdownLink
          onClick={() => {
            variant === "logout"
              ? (setUser({}), (window.location.href = "/"))
              : navigate(route);
          }}
        >
          {name}
        </MDBDropdownLink>
      </MDBDropdownItem>
    </Atom.NavBarItems>
  );
};

export default NavigationDropdownLink;
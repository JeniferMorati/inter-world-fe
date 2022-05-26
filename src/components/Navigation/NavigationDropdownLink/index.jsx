import React from "react";
// components: mdb

import {
  MDBBtn,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { atomCurrentUser } from "../../../store/atoms";

// ::
const NavigationDropdownLink = ({ name, route, variant }) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(atomCurrentUser);

  return (
    <MDBNavbarItem>
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
    </MDBNavbarItem>
  );
};

export default NavigationDropdownLink;

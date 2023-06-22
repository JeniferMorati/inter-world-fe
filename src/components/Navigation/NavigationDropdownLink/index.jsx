import React from "react";
// components: mdb

import {
  MDBDropdownItem,
  MDBDropdownLink,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

import { useNavigate } from "react-router";

import FirebaseAuth from "../../../firebase";

const firebase = new FirebaseAuth();

// ::
const NavigationDropdownLink = ({ name, route, variant }) => {
  const navigate = useNavigate();

  return (
    <MDBNavbarItem>
      <MDBDropdownItem>
        <MDBDropdownLink
          onClick={() => {
            variant === "logout" ? firebase.signOut() : navigate(route);
          }}
        >
          {name}
        </MDBDropdownLink>
      </MDBDropdownItem>
    </MDBNavbarItem>
  );
};

export default NavigationDropdownLink;

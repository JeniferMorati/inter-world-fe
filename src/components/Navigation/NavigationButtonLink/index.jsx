// components: mdb
import React from 'react';
import { MDBBtn, MDBNavbarItem } from "mdb-react-ui-kit";

// router
import { useNavigate } from "react-router";


// ::
const NavigationButtonLink = ({ name, route, color, outline, className }) => {
  const navigate = useNavigate();

  return (
    <MDBNavbarItem>
      <MDBBtn
        color={color}
        className={className}
        outline={outline}
        onClick={() => navigate(route)}
      >
        {name}
      </MDBBtn>
    </MDBNavbarItem>
  );
};

export default NavigationButtonLink;

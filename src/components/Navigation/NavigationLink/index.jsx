import React from 'react';
import { useEffect, useState } from "react";

// components: mdb
import { MDBNavbarLink } from "mdb-react-ui-kit";

// router
import { useNavigate, useLocation } from "react-router";

// components: atoms
import * as Atom from "../atoms";

// ::
const NavigationLink = ({ name, route }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname === route);
  }, [pathname]);

  return (
    <Atom.NavBarItems>
      <MDBNavbarLink active={active} onClick={() => navigate(route)}>
        {name}
      </MDBNavbarLink>
    </Atom.NavBarItems>
  );
};

export default NavigationLink;

import React from "react";
import { useState, Component, Fragment, useMemo, memo } from "react";
import { useDictionary } from "../../hooks/useDictionary";

// components: mdb
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

// router
import { useNavigate } from "react-router";

// navigation: configs
import { CONTENT_TYPES } from "./contentTypes";
import { navigationItems } from "./config";
import NavigationLogo from "./NavigationLogo";
import FirebaseAuth from "../../firebase";

// recursive render navigation function
const getItemContentType = (item) => {
  const contentType = CONTENT_TYPES[item.contentType];

  if (contentType) {
    const { componentTag, getAttributes } = contentType;

    const attributes = getAttributes(item, Component);
    if (item.hidden) {
      return { componentTag: Fragment, attributes: {} };
    }
    return { componentTag, attributes };
  }

  return { componentTag: Fragment, attributes: {} };
};

const getAllItemsComponents = (item) => {
  const codeKey = `render-${Math.random(new Date())
    .toFixed(5)
    .toString()
    .replace("0.", "")}`;
  const children =
    item.items && !item.hidden ? item.items.map(getAllItemsComponents) : [];
  const { componentTag, attributes } = getItemContentType(item);
  const Component = componentTag;
  return (
    <Component key={codeKey} {...attributes}>
      {children}
    </Component>
  );
};

const firebase = new FirebaseAuth();

// ::
const Navigation = () => {
  const navigate = useNavigate();
  const [showBasic, setShowBasic] = useState(false);
  const navigationDictionary = useDictionary().navigation;

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="mb-4">
      <MDBContainer>
        <MDBNavbarBrand onClick={() => navigate("/")}>
          <NavigationLogo />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          {navigationItems(
            firebase?.appAuth?.currentUser?.email,
            navigationDictionary
          ).menu.map(getAllItemsComponents)}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default memo(Navigation);

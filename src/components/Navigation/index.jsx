import { useState, Component, Fragment, useMemo, memo } from "react";

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
import { useAppContext } from "../../context";

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
  const children =
    item.items && !item.hidden ? item.items.map(getAllItemsComponents) : [];
  const { componentTag, attributes } = getItemContentType(item);
  const Component = componentTag;
  return <Component {...attributes}>{children}</Component>;
};

// ::
const Navigation = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppContext();
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="mb-4">
      <MDBContainer>
        <MDBNavbarBrand onClick={() => navigate("/")}>
          InterWorld
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
          {navigationItems(isAuthenticated).menu.map(getAllItemsComponents)}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default memo(Navigation);

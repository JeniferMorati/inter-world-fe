// components: mdb
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

// styled-components
import styled from "styled-components";

// context
import { useAppContext } from "../../../context";

//::
const NavigationUserDropdown = ({ children }) => {
  const { user } = useAppContext();

  // wrappers
  const DropdownToggleWrapper = styled(MDBDropdownToggle)`
    min-width: 220px;
  `;

  const DropdownMenuWrapper = styled(MDBDropdownMenu)`
    min-width: 220px;
  `;

  return (
    <MDBNavbarItem>
      <MDBDropdown>
        <DropdownToggleWrapper tag="a" className="btn btn-warning text-dark width-100">
          <MDBIcon icon="user" />
          <span className="m-4">{user?.name}</span>
        </DropdownToggleWrapper>
        <DropdownMenuWrapper>
          <MDBDropdownItem>{children}</MDBDropdownItem>
        </DropdownMenuWrapper>
      </MDBDropdown>
    </MDBNavbarItem>
  );
};

export default NavigationUserDropdown;

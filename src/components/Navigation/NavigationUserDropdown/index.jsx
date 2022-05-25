// components: mdb
import { Avatar, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { useRecoilValue } from "recoil";

// styled-components
import styled from "styled-components";

// context
import { useAppContext } from "../../../context";
import { atomCurrentUser } from "../../../store/atoms";

//::
const NavigationUserDropdown = ({ dropdownItems }) => {
  const user = useRecoilValue(atomCurrentUser);

  const menu = <Menu items={dropdownItems} />;

  return (
    <MDBNavbarItem>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a
          onClick={(event) => event.preventDefault()}
          className="d-flex justify-content-center align-items-center"
        >
          <Avatar size="large" src={user?.photoURL} />
          <span className="m-2 text-dark">{user?.displayName}</span>
          <DownOutlined className="text-secondary" />
        </a>
      </Dropdown>
    </MDBNavbarItem>
  );
};

export default NavigationUserDropdown;

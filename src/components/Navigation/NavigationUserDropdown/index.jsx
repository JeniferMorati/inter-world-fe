// components: mdb
import { Avatar, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { MDBNavbarItem } from "mdb-react-ui-kit";

// context
import FirebaseAuth from "../../../firebase";

const firebase = new FirebaseAuth();

//::
const NavigationUserDropdown = ({ dropdownItems }) => {
  const menu = <Menu items={dropdownItems} />;

  return (
    <MDBNavbarItem>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a
          onClick={(event) => event.preventDefault()}
          className="d-flex justify-content-center align-items-center"
        >
          <Avatar size="large" src={firebase?.appAuth?.currentUser?.photoURL} />
          <span className="m-2 text-dark">
            {firebase?.appAuth?.currentUser?.displayName}
          </span>
          <DownOutlined className="text-secondary" />
        </a>
      </Dropdown>
    </MDBNavbarItem>
  );
};

export default NavigationUserDropdown;

import { useState, useEffect } from "react";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import ReactCountryFlag from "react-country-flag";

// context
import { useAppContext } from "../../context";

const LanguageToggle = () => {
  // context: states
  const { language, setLanguage } = useAppContext();

  // local: states
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <MDBDropdown>
      <MDBDropdownToggle className="btn-secondary width-100">
        <ReactCountryFlag
          countryCode={language}
          svg
          style={{
            width: "1.50em",
            height: "1.50em",
          }}
          title="BR"
        />
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem onClick={() => setSelectedLanguage("BR")}>
          <ReactCountryFlag
            countryCode="BR"
            svg
            style={{
              width: "45px",
              height: "35px",
            }}
            title="BR"
          />
        </MDBDropdownItem>
        <MDBDropdownItem onClick={() => setSelectedLanguage("US")}>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: "45px",
              height: "35px",
            }}
            title="US"
          />
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default LanguageToggle;

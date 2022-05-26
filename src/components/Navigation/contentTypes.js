// components: mdb
import { MDBNavbarNav } from "mdb-react-ui-kit";
import LanguageToggle from "../LanguageToggle";

// components: atoms
import NavigationButtonLink from "./NavigationButtonLink";
import NavigationDropdownLink from "./NavigationDropdownLink";
import NavigationLink from "./NavigationLink/index";
import NavigationLogo from "./NavigationLogo";
import NavigationUserDropdown from "./NavigationUserDropdown";

export const CONTENT_TYPES = {
  section: {
    componentTag: MDBNavbarNav,
    getAttributes: (item) => ({
      className: item.className,
    }),
  },
  link: {
    componentTag: NavigationLink,
    getAttributes: (item) => ({
      name: item.name,
      route: item.route,
    }),
  },
  button: {
    componentTag: NavigationButtonLink,
    getAttributes: (item) => ({
      name: item.name,
      className: item.className,
      route: item.route,
      color: item.color,
      outline: !!item.outline,
    }),
  },
  user: {
    componentTag: NavigationUserDropdown,
    getAttributes: (item) => ({
      dropdownItems: item.dropdownItems,
    }),
  },
  languageToggle: {
    componentTag: LanguageToggle,
    getAttributes: () => ({}),
  },
  dropdownLink: {
    componentTag: NavigationDropdownLink,
    getAttributes: (item) => ({
      name: item.name,
      route: item.route,
      variant: item.variant,
    }),
  },
  navigationLogo: {
    componentTag: NavigationLogo,
    getAttributes: () => ({}),
  },
};

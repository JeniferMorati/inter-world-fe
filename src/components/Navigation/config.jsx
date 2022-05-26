// TODO: importar estado de "isAuthenticated" de um contexto global da aplicação

import NavigationDropdownLink from "./NavigationDropdownLink";

export const navigationItems = (isAuthenticated, dictionary) => ({
  menu: [
    {
      contentType: "section",
      className:
        "flex-center ml-auto mb-2 mb-lg-0 justify-content-start align-items-start",
      items: [
        {
          contentType: "link",
          name: dictionary.destinations,
          route: "/destinos",
        },
        {
          contentType: "link",
          name: dictionary.budget,
          route: "/orcamentos",
        },
        {
          contentType: "link",
          name: dictionary.aboutUs,
          route: "/sobre",
        },
      ],
    },
    {
      contentType: "section",
      className:
        "flex-center mr-auto mb-2 mb-lg-0 justify-content-end align-items-start gap-3",
      items: [
        {
          contentType: "user",
          hidden: !isAuthenticated,
          dropdownItems: [
            {
              label: <NavigationDropdownLink name="Sair" variant="logout" />,
              key: "0",
            },
          ],
        },
        {
          color: "secondary",
          outline: true,
          contentType: "button",
          className: "text-dark",
          name: dictionary.signUp,
          route: "/cadastrar",
          hidden: isAuthenticated,
        },
        {
          contentType: "button",
          color: "secondary",
          name: dictionary.login,
          route: "/login",
          hidden: isAuthenticated,
        },
        {
          contentType: "languageToggle",
        },
      ],
    },
  ],
});

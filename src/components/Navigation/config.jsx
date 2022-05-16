// TODO: importar estado de "isAuthenticated" de um contexto global da aplicação

export const navigationItems = (isAuthenticated) => ({
  menu: [
    {
      contentType: "section",
      className:
        "flex-center ml-auto mb-2 mb-lg-0 justify-content-start align-items-start",
      items: [
        {
          contentType: "link",
          name: "Destinos",
          route: "/destinos",
        },
        {
          contentType: "link",
          name: "Orçamentos",
          route: "/orcamentos",
        },
        {
          contentType: "link",
          name: "Sobre",
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
          items: [
            {
              contentType: "dropdownLink",
              name: "Sair",
              route: "/sair",
            },
          ],
        },
        {
          color: "secondary",
          outline: true,
          contentType: "button",
          className: "text-dark",
          name: "Cadastrar",
          route: "/cadastrar",
          hidden: isAuthenticated,
        },
        {
          contentType: "button",
          className: "text-dark",
          color: "secondary",
          name: "Login",
          route: "/login",
          hidden: isAuthenticated,
        },
        {
          contentType: "languageToggle",
        }
      ],
    },
  ],
});

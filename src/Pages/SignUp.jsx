import { MDBBtn, MDBContainer, MDBInputGroup } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context";

const SignUp = () => {
  const navigate = useNavigate();

  const { setIsAuthenticated, isAuthenticated, setUser, user } =
    useAppContext();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  // TODO: Fazer um requisição para API/BD enviando os dados e com base no retorno validar se cadastra ou não usuário
  useEffect(() => {
    setIsAuthenticated(false);
  }, []);

  const onRegisterUser = () => {
    setUser({
      name,
      country,
    });
    navigate("/");
  };

  if ((user && user.name) || isAuthenticated) return navigate("/");

  return (
    <MDBContainer className="display-flex gap-4">
      <MDBInputGroup noWrap>
        <input
          onChange={(event) => setName(event.target.value)}
          className="form-control"
          type="text"
          placeholder="Nome"
        />
      </MDBInputGroup>
      <MDBInputGroup noWrap>
        <input
          onChange={(event) => setCountry(event.target.value)}
          className="mt-2 form-control"
          type="text"
          placeholder="País"
        />
      </MDBInputGroup>
      <MDBBtn className="mt-4 w-100 text-dark" color="warning" onClick={onRegisterUser}>
        Cadastrar
      </MDBBtn>
    </MDBContainer>
  );
};

export default SignUp;

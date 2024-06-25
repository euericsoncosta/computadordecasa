import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Paragrafo, Title } from "./styled";
import axios from "../../services/axios";

const Login = () => {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get("/alunos");
    }
  }, []);
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit, amet</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
};

export default Login;

import { Container } from "../../styles/GlobalStyles";
import { Paragrafo, Title } from "./styled";
const Login = () => {
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

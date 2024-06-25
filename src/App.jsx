import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Page404 from "../pages/Page404";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

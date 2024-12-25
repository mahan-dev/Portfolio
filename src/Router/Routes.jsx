import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutePages;

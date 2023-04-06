import "./App.css";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";

const Shop = () => {
  return <div> this is shop page </div>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

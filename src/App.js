import "./App.css";
import ManageCategories from "./Component/ManageCategories";
import AdvertismentManagement from "./Component/Advertisement";
import Layout from "./HOC/Header_Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<ManageCategories />} path="/manageCategories" />
        <Route element={<AdvertismentManagement />} path="/" />
      </Routes>
      {/* <ManageCategories /> */}
      {/* <AdvertismentManagement /> */}
    </Layout>
  );
}

export default App;

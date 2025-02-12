import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { publicRoutes } from "./Routes/routes";
import Header from "./Show/Header/Header";
import Footer from "./Show/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

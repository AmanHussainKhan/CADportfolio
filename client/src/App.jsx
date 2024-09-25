import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./Pages/Store";
import AboutPage from "./Pages/AboutPage";

import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/AboutPage";
import ConnectPage from "./Pages/ConnectPage";
import AddedCartItemPage from "./Pages/AddedCartItemPage";
import SingleProductViewPage from "./Pages/SingleProductViewPage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import PageNotFound from "./Pages/PageNotFound";
import TTT from "./Pages/TTT";
import ProjectPage from "./Pages/ProjectPage";
import HelpmeCodePage from "./Pages/LoginPage";
import BNSHome from "./BNS/BNSHome";
import Paint from "./SmallProjects/Paint";
import WeatherApp from "./SmallProjects/WeatherApp";
import CountDownTimer from "./SmallProjects/CountDownTimer";
import Board from "./SmallProjects/TicTacToeGame/Board";
import Playground from "./Pages/Playground";
import BgChanger from "./SmallProjects/BgChanger";
import Todo from "./MERNPROJECTS/Todo/Todo";
import ReduxCart from "./SmallProjects/ReduxCart";
import ReduxCartTotal from "./SmallProjects/ReduxCartTotal";
import Practice from "./Pages/Practice";
import HelpmeCodeSignup from "./Component/UserRegisterPage";
import UserRegisterPage from "./Component/UserRegisterPage";
import HelpMeCodersHome from "./Pages/Helpmecoder/HelpMeCodersHome";

function App() {
  const isUserSignedIn = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/paint" element={<Paint />}></Route>
        <Route path="/weatherapp" element={<WeatherApp />}></Route>
        <Route path="/playground" element={<Playground />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/countdowntimer" element={<CountDownTimer />}></Route>
        <Route path="/bns" element={<BNSHome />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="/feedback" element={<ConnectPage />}></Route>
        // HELP ME code
        <Route path="/loginpage" element={<HelpmeCodePage />}></Route>
        <Route path="/signuppage" element={<UserRegisterPage />}></Route>
        {isUserSignedIn && (
          <Route
            path="/helpmecodershome"
            element={<HelpMeCodersHome />}
          ></Route>
        )}
        // -------------//
        <Route path="/addedCartItem" element={<AddedCartItemPage />}></Route>
        <Route path="/ttt" element={<Board />}></Route>
        <Route path="/bgChanger" element={<BgChanger />}></Route>
        <Route path="/majorTodo" element={<Todo />}></Route>
        <Route path="/reduxCart" element={<ReduxCart />}></Route>
        <Route path="/reduxCartTotal" element={<ReduxCartTotal />}></Route>
        <Route
          path="/singleProductView"
          element={<SingleProductViewPage />}
        ></Route>
        <Route path="/loginregister" element={<LoginRegisterPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

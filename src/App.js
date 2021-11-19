import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Explore from "./Pages/ExplorePage/Explore/Explore";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Login from "./Pages/LoginPage/Login/Login";
import Purchase from "./Pages/PurchasePage/Purchase.js/Purchase";
import PrivateRoute from "./Pages/LoginPage/PrivateRoute/PrivateRoute";
import Registration from "./Pages/LoginPage/Register/Register";
import Dashboard from "./Pages/DashboardPage/Dashboard/Dashboard";
import Pay from "./Pages/Pay/Pay";
import MyOrders from "./MyOrders/MyOrders";
import AddCars from "./AddCars/AddCars";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/pay">
              <Pay></Pay>
            </Route>
            <Route exact path="/orders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/addCars">
              <AddCars></AddCars>
            </Route>
            <PrivateRoute exact path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

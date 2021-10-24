

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componants/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotPound from './Componants/NotPound/NotPound';
import Booking from './Componants/Booking/Booking/Booking';
import Login from './Componants/Login/Login/Login';
import Header from './Componants/Shared/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Componants/Login/PrivateRoute/PrivateRoute';
import Service from './Componants/Home/Service/Service';
import AddService from './Componants/AddService/AddService';
import ManageServices from './Componants/ManageServices/ManageServices';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
            <Route path="*">
              <NotPound></NotPound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;

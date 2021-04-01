import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Singup from "./components/Singup";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import ProtectedRoute from "./utils/ProtectedRoutes"

import AuthState from "./context/authState";
function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/singup" component={Singup} exact />
          <Layout>
            <ProtectedRoute path="/dashboard" component={Dashboard} exact />
          </Layout>
        </Switch>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;

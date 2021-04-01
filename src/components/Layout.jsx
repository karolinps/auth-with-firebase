import { Layout, Button, message } from "antd";
import { firebase } from "../firebase";

import { withRouter } from "react-router-dom";
const { Header, Footer, Content } = Layout;

function LayoutComponent(props) {

  const logout = async () => {
    try {

      await firebase.auth().signOut();
      message.success("Hasta luego");
      props.history.push("/login");
      
    } catch (error) {
      message.warning(error.message);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Button onClick={logout}>Cerrar sesión</Button>
      </Header>
      <Content style={{ padding: "50px" }}>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default withRouter(LayoutComponent);

import { Form, Input, Button, message } from "antd";

import { withRouter } from "react-router-dom";

import {
  firebase,
  providerGitHub,
  providerFacebook,
  providerGoogle,
} from "../firebase";

function Login(props) {
  const login = async (values) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);

      props.history.push("/dashboard");
    } catch (error) {
      message.warning(error.message);
    }
  };

  const loginBySocial = async (provider) => {
    try {
      await firebase.auth().signInWithPopup(provider);

      props.history.push("/dashboard");
    } catch (error) {
      message.warning(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "5em 0",
        textAlign: "center",
      }}
    >
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={login}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Ingrese correo electrónico" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Ingrese la contraseña" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginBottom: 10 }}>
            Acceder
          </Button>
          <div>
            ¿No tienes cuenta?{" "}
            <a onClick={() => props.history.push("/singup")}>registrate</a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="danger" onClick={() => loginBySocial(providerGoogle)}>
            Google
          </Button>
          <Button
            style={{ background: "#3b5999", color: "white" }}
            onClick={() => loginBySocial(providerFacebook)}
          >
            Facebook
          </Button>
          <Button
            style={{ background: "#000", color: "white" }}
            onClick={() => loginBySocial(providerGitHub)}
          >
            GitHub
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(Login);

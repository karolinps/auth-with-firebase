import { Form, Input, Button, message } from "antd";
import { withRouter, Link } from "react-router-dom";
import { firebase } from "../firebase";

function Singup(props) {
  const onFinish = async (values) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);

      await firebase.auth().currentUser.updateProfile({
        displayName: values.name,
      });

      props.history.push("/dashboard");
      message.success("Se ha registrado correctamente");
    } catch (error) {
      var errorMessage = error.message;
      message.warning(errorMessage);
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
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre!",
            },
          ]}
        >
          <Input placeholder="Ingrese su nombre" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su correo electrónico!",
            },
          ]}
        >
          <Input placeholder="Correo electrónico" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su contraseña!",
            },
          ]}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginBottom: 10 }}>
            Registrarse
          </Button>
          <div>
            <Link to="/login">Volver al login</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(Singup);

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}
    >
      <Container
        className="bg-white p-4 rounded shadow"
        style={{ maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="remember">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          <div className="text-center mt-3">
            <a href="#">Forgot password?</a> | <a href="#">Register</a>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Login;

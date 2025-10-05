import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import UserForm from "./components/UserForm.jsx";
import UsersList from "./components/UserList.jsx";

export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [{ id: crypto.randomUUID(), ...user }, ...prev]);
  };

  return (
      <Container className="py-4">
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="mb-3">USERS</Card.Title>
                <UserForm onAdd={addUser} />
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <UsersList users={users} />
          </Col>
        </Row>
      </Container>
  );
}
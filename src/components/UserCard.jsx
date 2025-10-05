import { Card, Col, Row } from "react-bootstrap";

export default function UserCard({ user }) {
    return (
        <Card>
            <Row className="g-0 align-items-center">
                <Col xs={4}>
                    <Card.Img
                        src={user.photoUrl}
                        alt={`${user.firstName} ${user.lastName}`}
                        style={{ objectFit: "cover", height: 160, width: "100%" }}
                    />
                </Col>
                <Col xs={8}>
                    <Card.Body>
                        <Card.Title className="mb-1">
                            {user.firstName} {user.lastName}
                        </Card.Title>
                        <Card.Text className="mb-0">Age: {user.age}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}
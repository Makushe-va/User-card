import { Card, Stack } from "react-bootstrap";
import UserCard from "./UserCard.jsx";

export default function UsersList({ users }) {
    if (!users.length) {
        return <Card bg="light" body>Add the first user.</Card>;
    }
    return (
        <Stack gap={3}>
            {users.map((u) => (
                <UserCard key={u.id} user={u} />
            ))}
        </Stack>
    );
}
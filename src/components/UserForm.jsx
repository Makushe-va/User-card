import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function UserForm({ onAdd }) {
    const [firstName, setFirstName] = useState("");
    const [lastName,  setLastName]  = useState("");
    const [age,       setAge]       = useState("");
    const [file,      setFile]      = useState(null);
    const [preview,   setPreview]   = useState(null);


    const handleAgeChange = (e) => {
        const digits = e.target.value.replace(/\D/g, "");
        setAge(digits);
    };

    const handlePhoto = (e) => {
        const f = e.target.files?.[0] || null;
        if (!f || !f.type.startsWith("image/")) {
            setFile(null);
            setPreview(null);
            return;
        }
        setFile(f);
        setPreview(URL.createObjectURL(f));
    };

    const ageNumber   = age === "" ? NaN : parseInt(age, 10);
    const ageIsValid  = Number.isInteger(ageNumber) && ageNumber >= 0;
    const isFormValid =
        firstName.trim() !== "" &&
        lastName.trim()  !== "" &&
        ageIsValid &&
        file instanceof File;

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        onAdd({
            firstName: firstName.trim(),
            lastName:  lastName.trim(),
            age: ageNumber,
            photoUrl: preview,
        });

        setFirstName("");
        setLastName("");
        setAge("");
        setFile(null);
        setPreview(null);
        e.target.reset();
    };

    return (
        <Form onSubmit={onSubmit} noValidate>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your name"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name *</Form.Label>
                <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
                <Form.Label>Age *</Form.Label>
                <Form.Control
                    type="text"
                    inputMode="numeric"
                    value={age}
                    onChange={handleAgeChange}
                    placeholder="Enter how old you are"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handlePhoto} />
            </Form.Group>

            <div className="d-flex justify-content-end">
                <Button type="submit" disabled={!isFormValid}>
                    Add User
                </Button>
            </div>
        </Form>
    );
}
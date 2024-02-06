import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState("");

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleBlur = (event) => {
    if (event.target.value.trim() === "") {
      const newErrors = { ...errors };
      newErrors[event.target.name] = `${event.target.name} is required`;
      setErrors(newErrors);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm() && formData.message.trim() !== "") {
      emailjs
        .sendForm(
          "service_jq3l1jf",
          "contact_form",
          event.target,
          "7HBLpzumZiiKbiO0d"
        )
        .then(
          (result) => {
            console.log(result.text);
            setNotification("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log(error.text);
            setNotification("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={handleBlur}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={handleBlur}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onBlur={handleBlur}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
        {notification && <Alert variant="success">{notification}</Alert>}
      </Form>
    </Container>
  );
};

export default Contact;

import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

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
          alert("Message sent successfully!");
          event.target.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;

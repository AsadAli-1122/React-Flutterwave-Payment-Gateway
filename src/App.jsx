import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const centerVertically = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh", 
};

const gap = {
  marginBottom: "10px", 
};

export default function App() {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const config = {
    public_key: "YOUR_FLUTTERWAVE_PUBLIC_KEY",
    tx_ref: Date.now().toString(),
    amount: amount,
    currency: "UGX",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "My Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePaymentResponse = (response) => {
    closePaymentModal();
    console.log(response);
  };

  return (
    <Container className="App" style={centerVertically}>
      <Row>
        <Col>
          <Form
            onSubmit={(e) => {
              e.preventDefault(); 
              handleFlutterPayment({
                callback: handlePaymentResponse,
                onClose: () => {},
              });
            }}
          >
            <Form.Group controlId="amount" style={gap}>
              <Form.Control
                type="number"
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email" style={gap}>
              <Form.Control
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="name" style={gap}>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="phone" style={gap}>
              <Form.Control
                type="text"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Pay
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}


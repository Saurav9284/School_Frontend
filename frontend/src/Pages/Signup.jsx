import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast, Select } from "@chakra-ui/react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState([]);

  const navigate = useNavigate();
  const toast = useToast();

  const singnup = () => {
    const payload = JSON.stringify({ name, email, role, password });
    fetch("https://school-backend-saurav01.up.railway.app/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "User Created") {
          toast({
            position: "top",
            title: res.message,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/login");
        } else {
          toast({
            position: "top",
            title: res.message || "Signup failed",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top",
          title: "An error occurred during Signup",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          Create your account
        </Header>
        <Form size="large" onSubmit={singnup}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
              type="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Form.Input
              fluid
              icon="at"
              iconPosition="left"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Select
              placeholder="Select Role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="CREATER">Maker</option>
              <option value="VIEWER">Reader</option>
              <option value="VIEW_ALL">Read All</option>
            </Select>

            <br />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button color="green" fluid size="large">
              Signup
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account?{" "}
          <a href="./login" className="link">
            Login
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Signup;

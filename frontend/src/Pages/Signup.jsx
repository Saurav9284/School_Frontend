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
import { Flex, useToast } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const navigate = useNavigate();
  const toast = useToast();

  const singnup = (url,obj) => {
    const payload = JSON.stringify(obj);

    fetch(url, {
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

  const handleSignup = (e) => {
    e.preventDefault()
    let arr = []
    if (checkedItems[0]) {
        arr.push("CREATER")
    }
    if (checkedItems[1]) {
        arr.push("VIEW")
    }
    if (checkedItems[2]) {
        arr.push("VIEW_ALL")
    }
    singnup("https://school-backend-saurav01.up.railway.app/user/signup", { email, password, name, role: arr })
}

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          Create your account
        </Header>
        <Form size="large" onSubmit={handleSignup}>
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
            <Flex flexDir={"column"}>
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) =>
                  setCheckedItems([
                    e.target.checked,
                    e.target.checked,
                    e.target.checked,
                  ])
                }
                color={"blue.800"}
              >
                Choose Your Roles
              </Checkbox>
              <Flex pl={6} mt={1} gap={"10px"}>
                <Checkbox
                  isChecked={checkedItems[0]}
                  onChange={() =>
                    setCheckedItems([
                      !checkedItems[0],
                      checkedItems[1],
                      checkedItems[2],
                    ])
                  }
                  color={"gray.500"}
                >
                  Maker
                </Checkbox>
                <Checkbox
                  isChecked={checkedItems[1]}
                  onChange={() =>
                    setCheckedItems([
                      checkedItems[0],
                      !checkedItems[1],
                      checkedItems[2],
                    ])
                  }
                  color={"gray.500"}
                >
                  Reader
                </Checkbox>
                <Checkbox
                  isChecked={checkedItems[2]}
                  onChange={() =>
                    setCheckedItems([
                      checkedItems[0],
                      checkedItems[1],
                      !checkedItems[2],
                    ])
                  }
                  color={"gray.500"}
                >
                  Read All
                </Checkbox>
              </Flex>
            </Flex>
            <br/>
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

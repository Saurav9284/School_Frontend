import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'


function Login () {

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  const toast = useToast()
  const navigate = useNavigate()
  
  const login = async () => {
    const payload = JSON.stringify({ email, password });

    return fetch("https://school-backend-saurav01.up.railway.app/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: payload,
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.message === "login succcessful") {
                
                const token = res.userData.token;
                localStorage.setItem("Token", token);

                toast({
                    position: 'top',
                    title: res.message,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                navigate('/')
            } else {
                toast({
                    position: 'top',
                    title: res.message || "Login failed",
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
                position: 'top',
                title: "An error occurred during login",
                status: "error",
                duration: 5000,
                isClosable: true,
               
            });
        });
};



return (
  <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
         Log-in to your account
      </Header>
      <Form size='large' onSubmit={login}>
        <Segment stacked>
          <Form.Input fluid icon='at' iconPosition='left' placeholder='E-mail address' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <Button color='green' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='./signup' className='link'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)
}

export default Login
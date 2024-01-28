import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup () {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  const navigate = useNavigate();

  const singnup = () => {
    const payload = JSON.stringify({name, email, password})
    
    fetch("https://school-backend-saurav01.up.railway.app/user/signup", {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : payload
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

  return (
  <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
         Create your account
      </Header>
    <Form size='large' onSubmit={singnup}>
        <Segment stacked>
        <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Nmane'
            type='Name'
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
          <Form.Input fluid icon='at' iconPosition='left' placeholder='E-mail address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
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
            Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <a href='./login' className='link'>Login</a>
      </Message>
    </Grid.Column>
  </Grid>
)
}

export default Signup
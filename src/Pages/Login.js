import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Container,Form, FormGroup } from 'react-bootstrap'
import { Input, Label } from 'reactstrap';
import "../Css/Log.css";
import { doLogin } from '../Auth';
import Base from '../Components/Base';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate=useNavigate();
    const signUpImage="https://sanji.to/images/zoro-min.png";
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)
        }
        const submitHandler=async(e)=>{
            e.preventDefault();
           const request={
                email:email,
                password:password,
            }
            console.log(request)
            try {
                await axios.post(`http://localhost:8081/api/v1/auth/login`,request).then(data =>{
                  console.log(data)

                doLogin(data,()=>{
                    console.log("loggin details saved in local storage")
                })

               
                  navigate("/")
                })
            } catch (error) {
                console.log(error);
            }
        }
  return (
    <div className='body'>
        <Base>
          <Container>
                <div className='contain' style={{ backgroundImage: `url( ${signUpImage} ` }}>
                    <Card style={{ width: '20vw',height:"40vh" }} className="cardsf">
                    <Form className='form' onSubmit={submitHandler}>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                value={email}
                                onChange={emailHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                                Password
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                                value={password}
                                onChange={passwordHandler}
                            />
                        </FormGroup>

                        <Button type='Submit' style={{marginTop:"10px"}}>
                            SUBMIT
                        </Button>
                    
                    </Form>
                    </Card>

                   
                </div>

            </Container>
            </Base>
    </div>
  )
}

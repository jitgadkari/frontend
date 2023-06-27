
import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Base from '../Components/Base';

import "../Css/Signup.css"
export default function SignUp() {
 const navigate=useNavigate();
    // const [email,setEmail]=useState("");
    const signUpImage = "https://img.zorores.com/_r/1366x768/100/ff/b6/ffb6981af9cacd38b190c2d878a4405a/ffb6981af9cacd38b190c2d878a4405a.jpg"
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [img,setImg]=useState("");

    // const role= "NORMAL_USER"
    const nameHandler=(event)=>{
    setName(event.target.value)
    }
    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)
        }
    const imgHandler=(event)=>{
    setImg(event.target.value)
    }
    const submitHandler =async(e)=>{
        e.preventDefault();
       const userDto={
            name:name,
            email:email,
            password:password,
            img:img,

        }            

        console.log(userDto)
            try {
                await axios.post(`http://localhost:8081/api/v1/auth/register`,userDto).then(res =>{
                  console.log(res)
                  console.log("user registerd successfully")
                  setEmail("");
                  setName("");
                  setImg("");
                  setPassword("");
                  navigate("/")
                })    
            } catch (error) {
                console.log(error);
            }      

    }
    return (
        <Base>
        <div className='back' style={{ backgroundImage: `url( ${signUpImage} ` }}>
            <div className='maintain'  >
                <h3 >Create an Account</h3>
                <Form className='forms' onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for="exampleName">
                            Your Name
                        </Label>
                        <Input
                            id="exampleName"
                            name="name"
                            placeholder="name"
                            type="text" value={name}
                            onChange={nameHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
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
                    <FormGroup>
                        <Label for="exampleImage">
                            Image Address
                        </Label>
                        <Input
                            id="exampleImage"
                            name="img"
                            placeholder="Image Address"
                            type="text"
                            value={img}
                            onChange={imgHandler}
                        />
                    </FormGroup>

                    {/* <FormGroup check>
                        <Input type="checkbox" />
                        {' '}
                        <Label check>
                            Agree Terms and conditions
                        </Label>
                    </FormGroup> */}
                    <Button type='submit'>
                        Submit
                    </Button>
                </Form>

            </div>
        </div>
        </Base>
    )
}

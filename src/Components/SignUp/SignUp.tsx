import React, { useState } from "react";
import styled from "styled-components";
import pic from "./Assets/mic-logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegisterUser = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:2003/register", {
        name: fullName,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Card>
            <Wrapper2>
              <Logo src={pic} />
              <Text>Sign Up</Text>
              <Input
                onChange={(e) => {
                  setFullname(fullName);
                }}
                placeholder="Name"></Input>
              <Input
                onChange={(e) => {
                  setEmail(email);
                }}
                placeholder="Email"></Input>
              <Input
                onChange={(e) => {
                  setPassword(password);
                }}
                placeholder="Password"></Input>
              <Text3>
                Already have an account? <Link to="/">Sign In</Link>
              </Text3>
              <ButtonDiv>
                <Button bg="silver" col="black">
                  Back
                </Button>
                <Button bg="#5a5aaf" col="white">
                  Next
                </Button>
              </ButtonDiv>
            </Wrapper2>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignUp;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  margin-top: 70px;
`;
const Button = styled.div<{ bg: string; col: string }>`
  height: 50px;
  width: 200px;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: ${({ col }) => col};
`;

const Wrapper2 = styled.div`
  width: 90%;
  height: 90%;
  margin-top: 30px;
`;

const Text3 = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid black;
  font-size: 20px;
  margin-top: 30px;
  outline: 0;
  margin-bottom: 40px;
`;
const Text = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #312d2d;
`;
const Logo = styled.img`
  height: 50px;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 700px;
  height: 700px;
  /* background-color: aliceblue; */
`;
const Card = styled.div`
  width: 100%;
  height: 90%;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eceaea;
  display: flex;
  justify-content: center;
  align-items: center;
  /* backdrop-filter: calc(5px); */
`;

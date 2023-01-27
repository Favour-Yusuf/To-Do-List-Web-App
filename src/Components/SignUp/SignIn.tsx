import React from "react";
import styled from "styled-components";
import pic from "./Assets/mic-logo.png";
import { VscKey } from "react-icons/vsc";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Wrapper2>
            <Logo src={pic} />
            <Text>Sign In</Text>
            <Input placeholder="Email, Phone or skype"></Input>
            <Text2>
              No account? <Link to="/signUp">Create One!</Link>
            </Text2>
            <Text3>
              <a href="">can't access your account?</a>
            </Text3>
            <ButtonDiv>
              <Button bg="silver" col="black">
                Back
              </Button>
              <Button bg="#5a5aaf" col="white">
                <Link to="./HomePage">Next</Link>
              </Button>
            </ButtonDiv>
          </Wrapper2>
        </Card>
        <Option>
          <Wrap>
            <Key>
              <VscKey />
            </Key>
            <Text4>Sign-in options</Text4>
          </Wrap>
        </Option>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Wrap = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;
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
  text-decoration: none;
`;
const Key = styled.div`
  font-size: 40px;
  margin-right: 20px;
`;
const Text4 = styled.div`
  font-size: 20px;
`;
const Wrapper2 = styled.div`
  width: 90%;
  height: 90%;
  margin-top: 30px;
`;
const Text2 = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
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
const Option = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  margin-top: 30px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 700px;
  height: 700px;
  /* background-color: aliceblue; */
`;
const Card = styled.div`
  width: 100%;
  height: 70%;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  /* backdrop-filter: calc(5px); */
`;

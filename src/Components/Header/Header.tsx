import React from "react";
import styled from "styled-components";
import { TbGridDots } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { VscSettingsGear } from "react-icons/vsc";
import { RxQuestionMark } from "react-icons/rx";
import { VscMegaphone } from "react-icons/vsc";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Wrap1>
          <Icon1>
            <TbGridDots />
          </Icon1>
          <Logo>To Do</Logo>
        </Wrap1>
        <Wrap3>
          <Input>
            <SearchIcon>
              <AiOutlineSearch />
            </SearchIcon>
            <Inp type="search" />
          </Input>
        </Wrap3>
        <Wrap2>
          <SetIcon>
            <VscSettingsGear />
          </SetIcon>
          <QuestIcon>
            <RxQuestionMark />
          </QuestIcon>
          <MegaIcon>
            <VscMegaphone />
          </MegaIcon>
          <UserDiv>FY</UserDiv>
        </Wrap2>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Wrap3 = styled.div`
  height: 100%;
  width: 600px;
  display: flex;
  align-items: center;
`;

const Wrap1 = styled.div`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SetIcon = styled.div`
  font-size: 25px;
  color: white;
  cursor: pointer;

  :hover {
    background-color: transparent;
  }
`;
const QuestIcon = styled.div`
  font-size: 25px;
  color: white;
  cursor: pointer;
`;
const MegaIcon = styled.div`
  font-size: 25px;
  color: white;
  cursor: pointer;
`;
const UserDiv = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 360px;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Wrap2 = styled.div`
  width: 200px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const Input = styled.div`
  height: 80%;
  width: 500px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-left: 100px;
  background-color: white;
`;
const SearchIcon = styled.div`
  font-size: 25px;
  transform: rotate(90deg);
  color: #2564cf;
  margin-right: 10px;
`;
const Inp = styled.input`
  outline: 0;
  border: none;
  font-size: 20px;
  flex: 1;
`;

const Logo = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 900;
  /* margin-left: 20px; */
`;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon1 = styled.div`
  font-size: 30px;
  color: white;
`;
const Container = styled.div`
  background-color: #2564cf;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

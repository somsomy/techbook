import { Container, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import AppleIcon from '@mui/icons-material/Apple';

const WaterDrop = () => {
  return (
    <WaterDropContainer>
      <Container>
        <Drop>
          <AppleIcon sx={{ fontSize: '5rem', color: '#444' }} />
        </Drop>
      </Container>
      <SecondContainer>
        <Typography>TECHB</Typography>
        <SecondDrop />
        <SecondDrop />
        <Typography>K</Typography>
      </SecondContainer>
    </WaterDropContainer>
  );
};
const WaterDropContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
  & * {
    margin: 1rem;
    padding: 0;
    box-sizing: border-box;
  }
`;
const SecondContainer = styled(Container)`
  display: flex;
  align-items: center;
  & p {
    font-size: 5rem;
    font-weight: bold;
    margin: -10px;
  }
`;
const SecondDrop = styled(Stack)`
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05), 15px 25px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 15px rgba(225, 225, 225, 0.9);
  border-radius: 50%;

  &:: before {
    content: '';
    position: absolute;
    top: 15px;
    left: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
  }
  &:: after {
    content: '';
    position: absolute;
    top: 6px;
    left: 15px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
  }
`;
const Drop = styled(Stack)`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05), 15px 25px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 15px rgba(225, 225, 225, 0.9);
  border-radius: 50%;
  &:: before {
    content: '';
    position: absolute;
    top: 35px;
    left: 25px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
  }
  &:: after {
    content: '';
    position: absolute;
    top: 25px;
    left: 50px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
  }
`;

export default WaterDrop;

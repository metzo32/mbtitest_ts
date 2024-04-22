import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 100vh;
  background: #FFEFD8;
  padding-top: 40px;
  padding-left: 60px;
  padding-right: 60px;
  font-family: "oneBold";
  user-select: none;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
`;

const Header = styled.div`
  background: #FFAA20;
  font-size: 40pt;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  font-size: 40pt;
  background: #FFAA20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "oneTitle";
`

const ProgressbarWrapper = styled.div`
  .progress {
    width: 100%; 
    height: 30px; 
    background: #FFF5E8;
  }

  .progress-bar {
    background-color: #FFAA20; 
    transition: width 0.6s ease;
    background: rgb(255,210,57);
    background: linear-gradient(90deg, rgba(255,210,57,1) 0%, rgba(254,169,32,1) 50%, rgba(255,134,42,1) 100%);
`;


const Title = styled.div`
  font-size: 30pt;
  display: flex;
  margin-top: 16px;
`;

const LogoImage = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20pt;
  display: flex;
  margin-top: 8px;
`;

const small = styled.div`
  font-size: 14pt;
  display: flex;
  color: #A8A8A8;
`;

const smallWrapper = styled.div`
  margin-top: 22px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  font-size: 18pt;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
  padding: 20px;
`;

const Button = styled.div`
  background: #FFAA1F;
  color: #ffffff;
  padding: 20px;
  padding-left: 28px;
  padding-right: 28px;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
`

const ResultTitle = styled.div`
  font-size: 32pt;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ResultDesc = styled.div`
  font-size: 26pt;
  display: flex;
  margin-top: 30px;
`;

const resultSmall = styled.div`
  width: 800px;
  font-size: 16pt;
  display: flex;
  margin-top: 20px;
  margin-bottom: 60px;
  color: #707070;
`;

const BestDesc = styled.div`
  width: 800px;
  font-size: 21pt;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 40px;
  color: #707070;
`;

const BestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const BestWrapperImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 70px;
`;

const motion = styled.div`
  .slide-in {
    position: fixed;
    top: 0,
    left: 0,
    width: 100%,
    height: 100vh,
    background: #000000;
    transform-origin: left;
  }

  .slide-out {
    position: fixed;
    top: 0,
    left: 0,
    width: 100%,
    height: 100vh,
    background: #000000;
    transform-origin: right;
  }
`



const sty = {
  Wrapper,
  ContentWrapper,
  Header,
  HeaderWrapper,
  ProgressbarWrapper,
  Title,
  LogoImage,
  Desc,
  small,
  smallWrapper,
  ButtonGroup,
  Button,
  ResultTitle,
  ResultDesc,
  resultSmall,
  BestDesc,
  BestWrapper,
  BestWrapperImage,
  motion,
}

export default sty;
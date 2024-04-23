import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  background: #FFEFD8;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "oneBold";
  user-select: none;

  @media (min-width: 600px) {
    width: 100%; 
    height: 100%;  
    min-height: 100vh;  
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 900px) {
    width: 100%;
    height: 100%; 
    min-height: 100vh;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;

  @media (min-width: 600px) {
    margin-top: 15px;
  }

  @media (min-width: 900px) {
    margin-top: 20px;
  }
`;

//대제목
const HeaderWrapper = styled.div` 
  background: #FFAA20;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "oneTitle";
  font-size: 35px;
  white-space: nowrap;

  @media (min-width: 600px) {
    border-radius: 15px;
    font-size: 45px;
  }

  @media (min-width: 900px) {
    border-radius: 20px;
    font-size: 60px;
  }
`
const Header = styled.div`
  background: #FFAA20;
  display: flex;
  align-items: center;
  
  }
`;

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
  display: block;
  font-size: 20pt;
  display: flex;
  padding: 20px;
  white-space: nowrap;

  @media (min-width: 600px) {
    font-size: 25pt;
    white-space: normal;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  @media (min-width: 900px) {
    font-size: 30pt;
    white-space: normal;
`;

const LogoImage = styled.div`
  display: flex;
  margin-bottom: 16px;
  
  .main-pizza {
    max-width: 280px;
    height: 280px;
    margin-bottom: 24px;
    
    @media (min-width: 600px) {
      max-width: 330px;
      height: 330px;
    }
  
    @media (min-width: 900px) {
      max-width: 380px;
      height: 380px;
    }
  }
`;


const Desc = styled.div`
  font-size: 13pt;
  display: flex;
  white-space: nowrap;

  @media (min-width: 600px) {
    font-size: 18pt;
  }

  @media (min-width: 900px) {
    font-size: 22pt;
  }
`;

const smallWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 600px) {
    margin-top: 19px;
  }

  @media (min-width: 900px) {
    margin-top: 22px;
`;

const small = styled.div`
  font-size: 10pt;
  display: flex;
  color: #A8A8A8;
  white-space: nowrap;

  @media (min-width: 600px) {
    font-size: 12pt;
  }

  @media (min-width: 900px) {
    font-size: 14pt;
`;

const QuestionTitle = styled.div`
  display: block;
  font-size: 16pt;
  font-style: bold;
  display: flex;
  margin-top: 16px;
  padding: 20px;
  // white-space: nowrap;

  @media (min-width: 600px) {
    font-size: 20pt;
  }

  @media (min-width: 900px) {
    font-size: 26pt;
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  
  @media (min-width: 600px) {
    flex-direction: column;
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    margin-left: 0px;
    margin-right: 0px;
`;

const Button = styled.div`
  background: #FFAA1F;
  font-size: 15pt;
  color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 26px;
  padding-right: 26px;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  margin-top: 20px;

  &.right-margin {
    margin-right: 0px;
    margin-bottom: 10px;

    @media (min-width: 600px) {
      font-size: 18pt;
      margin-right: 0px;
      margin-bottom: 20px;
    }

    @media (min-width: 900px) {
      font-size: 20pt;
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
`;

const StyledImage = styled.img`
    width: 90%;
    border-radius: 30px;

    @media (min-width: 600px) {
      width: 90%;
      margin-left: 0px;
      margin-right: 0px;
    }

    @media (min-width: 900px) {
      width: 800px;
      margin-left: 0px;
      margin-right: 0px;
    }
  `;


const ResultTitle = styled.div`
  display: block;
  font-size: 18pt;
  display: flex;
  padding: 16px;
  white-space: nowrap;

  @media (min-width: 600px) {
    font-size: 25pt;
    padding: 20px;
    white-space: normal;
  }

  @media (min-width: 900px) {
    font-size: 30pt;
    padding: 20px;
    white-space: normal;
`;

const ResultDesc = styled.div`
  font-size: 18pt;
  display: flex;
  margin-top: 30px;

  @media (min-width: 600px) {
    font-size: 25pt;
    white-space: normal;
  }

  @media (min-width: 900px) {
    font-size: 30pt;
    white-space: normal;
  
`;

const resultSmall = styled.div`
color: #707070;
  font-size: 10pt;
  max-width: 600px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 600px) {
    width: 800px
    font-size: 13pt;
    max-width: 600px;
    margin-bottom: 40px;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 0px;
    padding-right: 0px;
    white-space: normal;
  }

  @media (min-width: 900px) {
    font-size: 16pt;
    max-width: 800px;
    margin-bottom: 60px;
    padding-left: 0px;
    padding-right: 0px;
    white-space: normal;
`;

const BestWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 0px;

  @media (min-width: 600px) {
    width: 90%;
    margin-top: 0px;
  }

  @media (min-width: 900px) {
    margin-top: 50px;
    width: 800px;
  }
`;

const BestDescWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 15px;

  @media (min-width: 600px) {
    margin-bottom: 35px;
  }

  @media (min-width: 900px) {
    margin-bottom: 35px;
`

const BestDesc = styled.div`
  
  font-size: 12pt;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  white-space: normal;

  @media (min-width: 600px) {
    width: 600px;
    font-size: 18pt;
  }

  @media (min-width: 900px) {
    width: 800px;
    font-size: 20pt;
`;

const BestWrapperImage = styled.div`
  width: 80%;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 600px) {
    width: 95%;
  }

  @media (min-width: 900px) {
    width: 800px;
`;

const BestPizzaImg = styled.img`
  width: 49%;
  border-radius: 20px;

  @media (min-width: 600px) {
  }

  @media (min-width: 900px) {

  }
`

const ShareWrapper = styled.div`
  width: 200px
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingImage = styled.img`
  animation: ${rotateAnimation} 4s steps(12, end) infinite; // 18단계로 나누어 매 초마다 회전
`;


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
  QuestionTitle,
  ButtonGroup,
  Button,
  StyledImage,
  ResultTitle,
  BestDescWrapper,
  ResultDesc,
  resultSmall,
  BestDesc,
  BestWrapper,
  BestWrapperImage,
  BestPizzaImg,
  ShareWrapper,
  rotateAnimation,
  RotatingImage,
}

export default sty;
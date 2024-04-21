import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 100vh;
  background: #FFEFD5;
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

const Title = styled.div`
  font-size: 30pt;
  display: flex;
  margin-top: 20px;
`;

const LogoImage = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20pt;
  display: flex;
  margin-top: 10px;
`;

const small = styled.div`
  font-size: 14pt;
  display: flex;
  margin-top: 8px;
  color: #A8A8A8;
`;

const smallWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  font-size: 20pt;
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
  margin-bottom: 20px;
  color: #707070;
`;

const BestDesc = styled.div`
  width: 800px;
  font-size: 24pt;
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
  padding-left: 50px;
  padding-right: 50px;
`;

const sty = {
  Wrapper,
  ContentWrapper,
  Header,
  HeaderWrapper,
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
}

export default sty;
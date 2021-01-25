import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content:center;
  align-items:center;
  position:relative;
`;

export const Overlay = styled.View`
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right:0;
  opacity: 0.7;
  background-color: #000;
`;
export const Box = styled.View`
  border-radius:20px;
  opacity: 0.8;
  background-color: #000;
  width:90%;
  padding:60px 0;
  z-index:1;
  text-align:center;
`;
export const Title = styled.Text`
  color: #fff;
  text-align:center;
  font-size:55px;
  font-weight:700;
  padding-bottom:50px;
  text-transform:uppercase
`;
export const NumberContainer = styled.View`
  margin:0 15px;
`;
export const TimerContainer = styled.View`
  flex-direction:row;
  justify-content:center;
`;
export const Number = styled.Text`
  color: #fff;
  text-align:center;
  font-size:35px;
  font-weight:700;
  margin:0 auto;
  text-align:center;
`;
export const NumberTime = styled.Text`
  color: #fff;
  text-align:center;
  font-size:15px;
  font-weight:500;
  margin:0 auto;
  text-align:center;
  text-transform:uppercase;
`;
export const CounterInfo = styled.View`
  text-align:center;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  margin-top:30px;
`;
export const CounterInfoItem = styled.Text`
  color: #fff;
  font-size:20px
`;
export const CounterInfoType = styled.Text`
  color: rgb(0, 171, 102);
  text-transform:capitalize;
  margin-right:5px
`;
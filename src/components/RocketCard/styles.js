import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 40px; 
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 25px;
  padding: 30px 20px;
  
`;

export const Main = styled.View`
  margin-bottom: 30px;
  text-align: center;
`;

export const Info = styled.View`
  padding: 40px 15px;
  
`;

export const Image = styled.Image`
  width: 240px;
  height: 240px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom:30px;
`;

export const Name = styled.Text`
  font-size: 30px;
  font-weight:700;
  margin-bottom:15px;
  color: ${({theme}) => theme.text};
  text-transform:uppercase;
`;
export const Text = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.text};
`;

export const Ul = styled.View`
  margin: 0;
  text-align: center;
  margin-top: 30px;
`;

export const UlHead = styled.Text`
  text-transform: capitalize;
  font-size: 18px;
  margin: 0;
  font-weight:700;
  padding-bottom: 10px;
  color: ${({theme}) => theme.text};
`;
export const UlLi = styled.Text`
  text-transform: capitalize;
  font-size: 12px;
  color: ${({theme}) => theme.text};
`;
export const Status = styled.View`
    margin: 0 auto;
`;
export const StatusText = styled.Text`
  border: ${(props) =>
    props.status === 'active'
      ? `2px solid ${props.theme.succes}`
      : '2px solid red'};
  padding: 10px 20px;
  font-size: 18px;
  color: ${(props) =>
    props.status === 'active' ? `${props.theme.succes}` : 'red'};
  width: 300px;
  text-align: center;
`;

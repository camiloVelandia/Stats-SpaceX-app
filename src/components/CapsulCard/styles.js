import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 25px;
  padding: 30px 20px;
  background-color: ${({theme}) => theme.body};
`;

export const Info = styled.View`
  border: 1px solid ${({theme}) => theme.text};
  padding: 40px 15px;
`;
export const Name = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 28px;
  color: ${({theme}) => theme.text};
  padding-left:15px;
`;
export const Letter = styled.Text`
  padding: 30px 15px 0;
  color: ${({theme}) => theme.text};

`;
export const Lists = styled.View`
  padding: 20px 15px;
  justify-content: space-around;
`;


export const Ul = styled.View`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  width: 100%; 
`;

export const ListItem = styled.Text`
  color: ${({theme}) => theme.text};
`;
export const ListHead = styled.Text`
  color: ${({theme}) => theme.text};
  font-size:24px

`;
export const StatusText = styled.Text`
  color: ${({theme}) => theme.succes};
  font-size: 24px;
  text-align: center;
  border: 2px solid ${({theme}) => theme.succes};
  padding: 10px 40px;
  text-transform: uppercase;
`;

export const Figure = styled.Image`
  width: 240px;
  height: 240px;
  margin: 0 auto;
  margin-top: 30px;
`;


export const Status = styled.View`
  margin-top: 30px;
  
`;

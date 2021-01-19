import React from 'react';
import {
  Container,
  Status,
  Figure,
  Info,
  Name,
  Letter,
  Ul,
  Lists,
  ListHead,
  ListItem,StatusText
} from './styles';


const CapsulCard = (props) => {
  return (
    <Container>
      <Info>
        <Name>{props.name}</Name>
        <Letter>{props.info}</Letter>
        <Lists>
          <Ul>
            <ListHead>Specs</ListHead>
            <ListItem> capacity: {props.capacity}</ListItem>
            <ListItem> first flight: {props.first_flight}</ListItem>
            <ListItem> type: {props.type}</ListItem>
            <ListItem> height: {props.height}</ListItem>
            <ListItem> feet: {props.feet}</ListItem>
          </Ul>

          <Ul>
            <ListHead>thrusters</ListHead>
            <ListItem> type: {props.tpropulsor}</ListItem>
            <ListItem> amount: {props.amount}</ListItem>
            <ListItem> fuel1: {props.fuel1}</ListItem>
            <ListItem> fuel2: {props.fuel2}</ListItem>
            <ListItem> isp: {props.isp}</ListItem>
            <ListItem> pods: {props.pods}</ListItem>
          </Ul>
        </Lists>
        <Figure source={{uri: `${props.image}`,}}/>
      </Info>

      <Status>
        <StatusText>status: {props.status || 'wait...'}</StatusText>
      </Status>
    </Container>
  );
};

export default CapsulCard;
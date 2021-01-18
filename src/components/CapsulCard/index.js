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
} from './styles';


const CapsulCard = (props) => {
  return (
    <Container>
      <Info>
        <Name>{props.name}</Name>
        <Letter>{props.info}</Letter>
        <Lists>
          <Ul>
            <Letter>Specs</Letter>
            <Letter> capacity: {props.capacity}</Letter>
            <Letter> first flight: {props.first_flight}</Letter>
            <Letter> type: {props.type}</Letter>
            <Letter> height: {props.height}</Letter>
            <Letter> feet: {props.feet}</Letter>
          </Ul>

          <Ul>
            <Letter>thrusters</Letter>
            <Letter> type: {props.tpropulsor}</Letter>
            <Letter> amount: {props.amount}</Letter>
            <Letter> fuel1: {props.fuel1}</Letter>
            <Letter> fuel2: {props.fuel2}</Letter>
            <Letter> isp: {props.isp}</Letter>
            <Letter> pods: {props.pods}</Letter>
          </Ul>
        </Lists>
        {/* <Figure>
          <img src={props.image} />
        </Figure> */}
      </Info>

      <Status>
        <Letter>status: {props.status || 'wait...'}</Letter>
      </Status>
    </Container>
  );
};

export default CapsulCard;
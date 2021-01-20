import React from 'react';
import {Container, Status, Main, Image, Info, Text, Ul, StatusText, Name, UlHead, UlLi} from './styles';

const RocketCard = (props) => {
  return (
    <Container>
      <Main>
        <Image source={{uri: `${props.image}`}} />
          
        <Info>
          <Name>{props.name}</Name>
          <Text>{props.info}</Text>

          <Ul>
            <UlHead>Specs</UlHead>
            <UlLi> boosters: {props.boosters}</UlLi>
            <UlLi> cost-launch: {props.costLaunch}</UlLi>
            <UlLi> stages: {props.stages}</UlLi>
            <UlLi> succes rate: {props.succesRate}</UlLi>
          </Ul>
          <Ul>
            <UlHead>Engines</UlHead>
            <UlLi> engine loss max: {props.engineLoss}</UlLi>
            <UlLi> layout: {props.layout}</UlLi>
            <UlLi> number: {props.number}</UlLi>
            <UlLi> type: {props.type}</UlLi>
            <UlLi> version: {props.version}</UlLi>
            <UlLi> propellant 1: {props.propellant1}</UlLi>
          </Ul>
          <Ul>
            <UlHead>Other</UlHead>
            <UlLi> fisrt flight: {props.fflight}</UlLi>
            <UlLi> country: {props.country}</UlLi>
          </Ul>
        </Info>
      </Main>
      <Status status={props.status}>
        <StatusText>status: {props.status}</StatusText>
      </Status>
    </Container>
  );
};

export default RocketCard;

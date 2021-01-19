import React from 'react';
import {Section, Title, Overlay} from './styles';

const Banner = (props) => {
  console.log( 'back', props.backImage)
  return (
    <Section backImage={props.backImage} source={props.backImage}  style={{
            resizeMode: "cover",}}>
      <Title> {props.title}</Title>
      <Overlay />
    </Section>
  );
};

export default Banner;

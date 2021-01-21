import React, {useEffect} from 'react';
import {Section, Btn, Text} from './styles';

const BtnLaunches = (props) => {

  const HandlePress=()=>{
    navigation.navigate(`${launches}`)
    console.log('go', props)
  }
  useEffect(()=>{
  })

  return (
    <Section>
      <Btn onPress={() => HandlePress()}>
        <Text>past launches</Text>
      </Btn>
      <Btn>
        <Text>next launches</Text>
      </Btn>
    </Section>
  );
};

export default BtnLaunches;

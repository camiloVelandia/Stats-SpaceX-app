import React from 'react';
import {Section, Title, Container} from './styles';
import {VictoryLabel, VictoryTooltip, VictoryPie} from 'victory-native';

const StatCard = (props) => {
  const dataNumber = props.items.datasets.map((item, index)=>{
    console.log(item)
    return {x: item[0].label[index], y: item[0].number[index]};
  })
  return (
    <Section>
      <Title>{props.title || 'titulo'}</Title>
      <Container>
        <VictoryPie
          style={{labels: {fill: 'white'}}}
          innerRadius={110}
          labelRadius={80}
          width={220}
          data={
           dataNumber
          }
        />
      </Container>
    </Section>
  );
};

export default StatCard;

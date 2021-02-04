import React from 'react';
import {Section, TitleText, Container, TitleView} from './styles';
import {VictoryLabel, VictoryTooltip, VictoryPie} from 'victory-native';

const StatCard = (props) => {
  const dataNumber = props.items.datasets.map((item, index)=>{
    return {x: item[0].label[index], y: item[0].number[index]};
  })
  return (
    <Section>
    <TitleView>
      <TitleText>{props.title || 'titulo'}</TitleText>
    </TitleView>
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

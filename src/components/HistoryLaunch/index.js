import React, {useState, useEffect} from 'react';
import {Section, Title, Container} from './styles';
import getRocketInfo from '../../services/getRocketInfo';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
} from 'victory-native';


const HistoryLaunch = () => {
  const [rocket, setRocket] = useState([]);
  const [rocketName, setRocketName] = useState([]);
  const [rocketSucces, setRocketSucces] = useState([]);

  useEffect(() => {
    getRocketInfo().then((data) => {
      setRocket(data);
    });
  }, []);

  useEffect(() => {
    const name = rocket.map((item) => {
      return item.name;
    });
    const succes = rocket.map((item) => {
      return item.success_rate_pct;
    });
    setRocketName(name);
    setRocketSucces(succes);
  }, [rocket]);


console.log(rocketSucces[0]);
  const data = {
    launches:[
      {x:rocketName[0], y:rocketSucces[0]  || 1},
      {x:rocketName[1], y:rocketSucces[1] || 1},
      {x:rocketName[2], y:rocketSucces[2] || 1},
      {x:rocketName[3], y:rocketSucces[3] || 1},
    ]
  };
  return (
    <Section>
      <Title>Rockets succes rate</Title>
      <VictoryChart width={320} theme={VictoryTheme.grayscale}>
        <VictoryGroup offset={1}>
          <VictoryBar
            data={data.launches}
            style={{data: {fill: 'blue'}}}
          />
          
          <VictoryBar
            data={data.launches}
            style={{data: {fill: 'blue'}}}
          />
          
        </VictoryGroup>
      </VictoryChart>
    </Section>
  );
};

export default HistoryLaunch;

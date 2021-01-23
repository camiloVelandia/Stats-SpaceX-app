import React, {useState, useEffect} from 'react';
import {Section, Title, Container} from './styles';
import getRocketInfo from '../../services/getRocketInfo';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  responsive: true,
};

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

  const data = {
    labels: rocketName,
    datasets: [
      {
        label: 'percent',
        data: rocketSucces,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Section>
      <Title>Rockets succes rate</Title>
      <Container>
      </Container>
    </Section>
  );
};

export default HistoryLaunch;

import React, {useState, useEffect} from 'react';
import getPastLaunches from '../../services/getPastLaunchesNP';
import getPayload from '../../services/getPayload';

import StatCard from '../StatCard';

import {Grid} from './styles';

const GridStats = () => {
  const [dragonInfo, setdragonInfo] = useState([]);
  const [succes, setsucces] = useState('');
  const [fail, setfail] = useState('');

  const [customer, setcustomer] = useState([]);
  const [customerName, setcustomerName] = useState([]);
  const [customerLaunches, setcustomerLaunches] = useState([]);

  // bring the data for launch stats
  useEffect(() => {
    getPastLaunches().then((data) => {
      setdragonInfo(data);
    });
  }, []);
  useEffect(() => {
    const succeslaunch = dragonInfo.filter((item) => {
      return !item.success;
    });
    const faillaunch = dragonInfo.filter((item) => {
      return item.success;
    });
    setsucces(succeslaunch.length);
    setfail(faillaunch.length);
  }, [dragonInfo]);

  const dataSucces = {
    labels: ['FAIL', 'SUCCESS'],
    datasets: [
      {
        label: '# of Votes',
        data: [fail, succes],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // bring the data for customer stats
  useEffect(() => {
    getPayload().then((data) => {
      setcustomer(data);
    });
  }, []);

  useEffect(() => {
    const name = customer.map((item) => {
      return item.customers[0];
    });
    let unicos = Array.from(new Set(name));
    let first = unicos.slice(0, 5);
    setcustomerName(first);
  }, [customer]);

  useEffect(() => {
    const result = [];
    for (let i = 0; i < customerName.length; i++) {
      let element = customer.filter((item) => {
        const total = item.customers.includes(customerName[i]);
        return total;
      });
      result.push(element.length);
    }
    setcustomerLaunches(result);
  }, [customerName]);

  const dataCustomer = {
    labels: customerName,
    datasets: [
      {
        data: customerLaunches,
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
    <Grid>
      <StatCard title="launch stats" items={dataSucces} />
      <StatCard title="commercial Customers" items={dataCustomer} />
    </Grid>
  );
};

export default GridStats;

import React, {useState, useEffect} from 'react';
import getPastLaunches from '../../services/getPastLaunchesNP';
import getPayload from '../../services/getPayload';

import StatCard from '../StatCard';

import {Grid} from './styles';

const GridStats = () => {
  const [dragonInfo, setdragonInfo] = useState([]);
  const [succes, setsucces] = useState('');
  const [fail, setfail] = useState('');

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
    datasets:[
      
        [
           {
            number:[fail, succes],
            label:['FAIL', 'SUCCESS'],
          }
           
        ],
        [
           {
            number:[fail, succes],
            label:['FAIL', 'SUCCESS'],
          }
           
        ]
    ]
  };

 

  return (
    <Grid>
      <StatCard title="launch stats" items={dataSucces} />
    </Grid>
  );
};

export default GridStats;

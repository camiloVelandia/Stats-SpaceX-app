import React, {useState, useEffect} from 'react';
import { Text } from 'react-native'
import getFilterLaunches from '../../../services/getFilterLaunches';
import PastCard from '../../../components/PastCard';
import {Container, Title} from './styles'
const Results = () => {
    const [launches, setlaunches] = useState({docs: []});
    const [result, setresult] = useState([]);
    const [keyword, setkeyword] = useState('key');

    useEffect(() => {
      getFilterLaunches(keyword).then((data) => {
        setlaunches(data);
      });
    }, [keyword]);

    useEffect(() => {
      setresult(launches.docs);
      setkeyword('key');
    }, [launches]);



  return (
    <Container>
      <Title >
         results for: {keyword}
      </Title>
      {/* <div className="resultContainer">
        {!result.length > 0 ? (
          <p className="notFound">Not found results</p>
        ) : (
          result.map((item, index) => {
            return (
              <PastCard
                key={item.id}
                title={item.name}
                detail={item.details}
                image={item.links.patch.small}
                number={item.flight_number}
                date={item.date_local}
                succes={item.succes ? 'succes' : 'fail'}
              />
            );
          })
        )}
      </div> */}
    </Container>
  );
};

export default Results;
import React, {useState, useEffect} from 'react';
import getFilterLaunches from '../../../services/getFilterLaunches';
import PastCard from '../../../components/PastCard';
import {Container, Title, NotFound, ResultContainer} from './styles';
const Results = (props) => {
    const [launches, setlaunches] = useState({docs: []});
    const [result, setresult] = useState([]);
    const [keyword, setkeyword] = useState(props.route.params.keyword);

    useEffect(() => {
      getFilterLaunches(keyword).then((data) => {
        setlaunches(data);
      });
    }, [keyword]);

    useEffect(() => {
      setresult(launches.docs);
      setkeyword(keyword);
    }, [launches]);

  return (
    <Container>
      <Title>results for: {keyword}</Title>
      <ResultContainer>
        {!result.length > 0 ? (
          <NotFound className="notFound">Not found results</NotFound>
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
      </ResultContainer>
    </Container>
  );
};

export default Results;
import React,{useState} from 'react';
import {Container, Input} from './styles'

const Search = (props) => {

  const [keyword, setkeyword] = useState('');

  const target = props;
  const handleSubmit = (prop) => {
    prop.props.navigation.navigate('Results',{keyword});
    setkeyword('')
  };


  return (
    <Container>
      <Input
        type="text"
        placeholder="search launches"
        placeholderTextColor="#fff"
        onChangeText={(keyword) => setkeyword(keyword)}
        onSubmitEditing={()=>handleSubmit(target)}
        value={keyword}
      />
    </Container>
  );
};

export default Search;
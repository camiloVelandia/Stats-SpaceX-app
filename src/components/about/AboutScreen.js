import React,{useState, useEffect} from 'react';
import {
  Section,
  Overlay,
  Container,
  Article,
  Title,
  Letter,
  Item,
  ItemTitle,
  ItemLi,
  Links,
  Loader,
  LoaderContainer,
} from './styles';
import getCompanyInfo from '../../services/getCompanyInfo';
import {Linking, TouchableOpacity, ScrollView } from 'react-native';


const AboutScreen = () => {

  
  const [info, setinfo] = useState({links: {}});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCompanyInfo().then((data) =>{
      setinfo({...data}),
      setLoading(false)
    }) 
  }, []);

  if (loading) {
    return <LoaderContainer><Loader color="#fff" size="large" /></LoaderContainer>
  }

  return (
    <ScrollView>
      <Section source={require('statSpaceX/src/assets/images/Dragon.jpg')}>
        <Container>
          <Article>
            <Title>about: {info.name}</Title>
            <Letter>{info.summary}</Letter>
            <Item>
              <ItemTitle>company info</ItemTitle>
              <ItemLi>Founded: {info.founded}</ItemLi>
              <ItemLi>CEO: {info.ceo}</ItemLi>
              <ItemLi>CTO: {info.cto}</ItemLi>
              <ItemLi>COO: {info.coo}</ItemLi>
              <ItemLi>CTO propulsion: {info.cto_propulsion}</ItemLi>
            </Item>
            <Item>
              <ItemTitle>More</ItemTitle>
              <ItemLi>Employees: {info.employees}</ItemLi>
              <ItemLi>Launch Sites: {info.launch_sites}</ItemLi>
              <ItemLi>Valuation: {info.valuation}</ItemLi>
              <ItemLi>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${info.links.website}`)}>
                  <Links>{info.links.website}</Links>
                </TouchableOpacity>
                <ItemLi>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(`${info.links.twitter}`)}>
                    <Links>{info.links.twitter}</Links>
                  </TouchableOpacity>
                </ItemLi>
              </ItemLi>
            </Item>
          </Article>
          <Article>
            <Title>about: me</Title>
            <Letter>
              Hi, I'm Camilo Velandia, a passionate self-taught frontEnd web
              developer from Colombia. with an interest in web and mobile
              projects, with user-centered approaches. currently part of the
              Platzi master program.
            </Letter>
            <Item>
              <ItemTitle>experience</ItemTitle>

              <ItemLi>Software Developer at Platzi master</ItemLi>
              <ItemLi>Frontend Developer at 360 PMI</ItemLi>
              <ItemLi>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      'https://www.linkedin.com/in/camilo-velandia/',
                    )
                  }>
                  <Links>Find me in Linkedin</Links>
                </TouchableOpacity>
              </ItemLi>
              <ItemLi>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL('https://twitter.com/xander_coder')
                  }>
                  <Links>Find me in Twitter</Links>
                </TouchableOpacity>
              </ItemLi>
              <ItemLi>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL('https://github.com/camiloVelandia')
                  }>
                  <Links>Find me in Github</Links>
                </TouchableOpacity>
              </ItemLi>
            </Item>
            <Item>
              <ItemTitle> tools</ItemTitle>
              <ItemLi>Javascript</ItemLi>
              <ItemLi>React js</ItemLi>
              <ItemLi>Redux</ItemLi>
              <ItemLi>Next js</ItemLi>
              <ItemLi>Styled components</ItemLi>
              <ItemLi>Git</ItemLi>
            </Item>
          </Article>
        </Container>
        <Overlay />
      </Section>
    </ScrollView>
  );
};

export default AboutScreen;
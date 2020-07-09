import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  Actions,
} from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>

            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <Actions>
            <AntDesign name="gift" size={30} color="#10c86e" />
            <MaterialCommunityIcons
              name="brightness-percent"
              size={30}
              color="#10c86e"
              style={{ marginLeft: 12 }}
            />
          </Actions>
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
};

export default Home;

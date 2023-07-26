/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import styled from 'styled-components/native';

import {
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window')

function App(): JSX.Element {

  const [username, setUsername] = useState('Dstudio_agency')
  const [password, setPassword] = useState('')

  return (

    <MainContainer>

      <InnerContainer>

        <CircleView>
          <HalfBlackCircleView />
          <HalfCircleView />
        </CircleView>
        <ScrollViewContainer showsVerticalScrollIndicator={false}>
          <LoginNowText>Hey,</LoginNowText>
          <LoginNowText>Login Now.</LoginNowText>

          <TextButtonView>
            <ButtonTextGrey>If you are new / </ButtonTextGrey>
            <ButtonContainer>
              <CreatNewText>  Create New</CreatNewText>
            </ButtonContainer>
          </TextButtonView>

          <UserFieldView>
            <UserInputView
              value={username}
              placeholder='Username'
              onChange={(text: any) => setUsername(text)}
            />
            <ImageIcon />
          </UserFieldView>
          <PasscodeInputView
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChange={(text: any) => setPassword(text)}
          />

          <TextButtonView>
            <ButtonTextGrey>Forgot Passcode? /  </ButtonTextGrey>
            <ButtonContainer>
              <CreatNewText>  Reset</CreatNewText>
            </ButtonContainer>
          </TextButtonView>
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
          <ButtonContainer>
            <ButtonTextGrey>Skip Now</ButtonTextGrey>
          </ButtonContainer>
        </ScrollViewContainer>

      </InnerContainer>

    </MainContainer>
  );
}

export default App;


const MainContainer = styled.View`
  flex: 1;
  background-color: #D2D3CE;
  align-items: center;
  justify-content: center;
`;
const InnerContainer = styled.View`
  background-color: white;
  height: ${height - (80)};
  width: ${width - 40};
  margin-top:20px;
  border-radius:30px;
  padding-horizontal:40px
`;
const CircleView = styled.View`
  height: 40px;
  width: ${width - 40};
  margin-top:50px;
  margin-left:-20px;
  margin-bottom:80px;
`;
const ScrollViewContainer = styled.ScrollView`
margin:0px;
margin-bottom:30px
`;
const HalfBlackCircleView = styled.View`
  background-color: black;
  height: 40px;
  width: 40px;
  border-radius:20px;
`;
const HalfCircleView = styled.View`
  background-color: white;
  height: 40px;
  width: 20px;
  position:absolute;
`;
const LoginNowText = styled.Text`
  font-size: 28px;
  color: black;
  font-weight: 800;
`;
const ButtonTextGrey = styled.Text`
  font-size: 15px;
  color: gray;
  font-weight: 500;
`;
const CreatNewText = styled.Text`
  font-size: 17px;
  color: black;
  font-weight: 500;
`;
const UserFieldView = styled.View`
  height:50px;
  border-radius:8px;
  background-color: #FDCE89;
  margin-top: 60px;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding-right:20px;
`;
const UserInputView = styled.TextInput`
  height:50px;
  padding-horizontal:20px;
  font-weight: 600;
  font-size:16px;
`;
const ImageIcon = styled.View`
height:20px;
width:20px;
border-radius:10px;
background-color:white;
`;
const PasscodeInputView = styled.TextInput`
  height:50px;
  border-radius:8px;
  background-color: #F5F5F5;
  margin-top: 25px;
  padding-horizontal:20px;
  font-weight: 600;
  font-size:13px
`;
const LoginButton = styled.TouchableOpacity`
  height:50px;
  border-radius:8px;
  background-color: #B02643;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  margin-bottom:30px;
`;
const LoginButtonText = styled.Text`
  font-size: 17px;
  color: white;
  font-weight: 500;
`;
const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
const TextButtonView = styled.View`
  align-items: center;
  margin-top:25px;
  flex-direction:row;
`;











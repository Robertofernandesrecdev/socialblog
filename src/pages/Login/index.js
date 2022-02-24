/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text} from 'react-native';

import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText } from './styles';  //importando o styles

function Login(){
  const [login, setLogin] = useState(true); // começar como true vai para area de logar 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  //trocar o valor de false para true. E trazendo para o estado de vazio os campos! 
  function toggleLogin(){
    setLogin(!login)
    setName('')
    setEmail('')
    setPassword('')
  }

  function handleSignIn(){
    if(email === '' || password === ''){
      console.log("preencha todos os campos")
      return;
    }

    // Fazer o login do user 

  }

  function handleSingUP(){
    if(name === '' || email === '' || password === ''){
      console.log("preencha todos os campos para cadastrar")
      return;
    }

    //Cadastrar usuário na aplicação 


  }

 //useState true renderiza essa pagina!
  if(login){
    return(
      <Container>
      <Title>
        Social<Text style={{ color: '#DAA520' }}>Blog</Text>
      </Title>

      <Input
        placeholder="meuemail@teste.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
       
       <Input
        placeholder="************"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button onPress={handleSignIn}>
        <ButtonText>Entrar</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}> 
        <SignUpText>Criar Conta</SignUpText>
      </SignUpButton>

    </Container>
    );

  }

// useState false vai rederizar essa pagina!

  return (
    <Container>
      <Title>
        Social<Text style={{ color: '#DAA520' }}>Blog</Text>
      </Title>

      <Input
        placeholder="Seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Input 
        placeholder="meuemail@teste.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
       
       <Input
        placeholder="************"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button onPress={handleSingUP}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}> 
        <SignUpText>Já Possuo uma conta </SignUpText>
      </SignUpButton>

    </Container>
  );

  }

export default Login;

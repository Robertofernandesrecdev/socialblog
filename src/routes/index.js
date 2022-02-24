/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator} from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


function Routes(){
    const signed = false;
    const loading = false;

    // ActivityIndicator bolinha de loading girando!
    if (loading){
      return (
        <View 
        style={{flex:1,
          justifyContent:'center', 
          alignItems:'center',
          backgroundColor:'#36393F'
        }}>
        <ActivityIndicator size= {50} color="#E52246"/> 
    </View>
      )
    }

    return (
        signed ? <AppRoutes/> : <AuthRoutes/> // se o signed estiver true eu renderizo <AppRoutes/> senão renderiza o <AuthRoues/>.

    )
}

export default Routes;
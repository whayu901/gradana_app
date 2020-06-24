import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Form from '../screen/Form';
import Table from '../screen/Table';
import Upload from '../screen/Upload';


const Tab = createBottomTabNavigator();

const Stack = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}>
    <Tab.Screen name="Form" component={Form} options={{
      tabBarLabel: "Form",
      tabBarIcon: ({ color, size }) => (
        <Icon name="card-text-outline" color={color} size={size} />
      )
    }} />
    <Tab.Screen name="Upload" component={Upload} options={{
      tabBarLabel: "Upload",
      tabBarIcon: ({ color, size }) => (
        <Icon name="cloud-upload" color={color} size={size} />
      )
    }} />
    <Tab.Screen name="Table" component={Table} options={{
      tabBarLabel: "Table",
      tabBarIcon: ({ color, size }) => (
        <Icon name="file-table-outline" color={color} size={size} />
      )
    }} />
  </Tab.Navigator>
);

export default Stack;
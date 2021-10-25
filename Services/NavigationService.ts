import {NavigationContainerRef} from '@react-navigation/core';
import React from 'react';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params: any) => {
  navigationRef?.current?.navigate(name, params);
};
export const navigateAndReset = (route: string) => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef?.current?.reset({
      index: 0,
      routes: [{name: route}],
    });
  }
};

export default {
  navigate,
  navigateAndReset,
  // setTopLevelNavigator,
};

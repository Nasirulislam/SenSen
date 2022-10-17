import React from 'react';
import Provider from './src/Store/Provider';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
// import MyTabs from './src/Config/BottomNavigator'
import { NavigationContainer } from '@react-navigation/native';



const App: () => React$Node = () => {
  React.useEffect(() => {
    console.disableYellowBox = true;
  }, []);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider />
    </ApplicationProvider>
  );
};

export default App;

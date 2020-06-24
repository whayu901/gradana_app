import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './src/navigation';
import { persistor, store } from './src/redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;

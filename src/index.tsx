import { IonApp } from '@ionic/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

ReactDOM.render(
  <React.StrictMode>
    <IonApp>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      </Provider>
    </IonApp>
  </React.StrictMode>,
  document.getElementById('root')
);
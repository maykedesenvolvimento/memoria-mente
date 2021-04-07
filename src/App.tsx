import React, { useEffect, useRef } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { colors, Container } from './styles';
import { setNavigation } from './services/navigation';
import GamePage from './pages/Game';
import HomePage from './pages/Home';
import PlayerPage from './pages/Player';
import { useSelector } from 'react-redux';
import { State } from './store/types';
import { setPlayerDeviceId } from './store/modules/player/actions';
import Tabs from './components/Tabs';
import { Device, Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar, SplashScreen } = Plugins;

const App: React.FC = () => {
  const ref = useRef<BrowserRouter>(null);
  const { player: { deviceId } } = useSelector((state: State) => state);

  useEffect(() => {
    async function preLoad() {
      try {
        await StatusBar.setBackgroundColor({color: colors.dark});
        await StatusBar.setStyle({style: StatusBarStyle.Dark});
        await SplashScreen.hide();
      }
      catch(error) {
        console.log(error);
      };
    }
    preLoad();
    
    if (!deviceId) Device.getInfo().then(({ uuid }) => setPlayerDeviceId(uuid));
  }, []);
  
  useEffect(() => {
    if (ref.current) {
      // @ts-ignore
      setNavigation(ref.current.history);
    }
  }, [ref]);

  return (
    <Container>
      <BrowserRouter ref={ref}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/game" component={GamePage} />
          <Route path="/player" component={PlayerPage} />
        </Switch>
        <Tabs />
      </BrowserRouter>
    </Container>
  );
};

export default App;
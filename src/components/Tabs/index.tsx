import { Plugins } from '@capacitor/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { pushNavigation } from '../../services/navigation';
import { State } from '../../store/types';
import { BottomRight, Image } from '../../styles';
import { Container, Tab } from './styles';

const Tabs: React.FC = () => {
    const { player: {currentScore} } = useSelector((state: State) => state);
    const { pathname } = useLocation();
    const { App } = Plugins;
    
    const goBack = (currentPath?: string) => {
        const path = currentPath || pathname;
        pushNavigation(path==='/game' ? '/game/exit' : '/');
    };

    useEffect(() => {
        App.addListener('backButton', () => {
            if (window.location.pathname==='/') App.exitApp();
            else goBack(window.location.pathname);
        });
    }, []);

    return (
        pathname.includes('/game') && 
        <Container>
            {!currentScore || <Tab active>{currentScore} pontos</Tab>}
            <BottomRight>
                <Image onClick={() => goBack()} src='assets/images/back.png' />
            </BottomRight>
        </Container> ||
        <Container shaded>
            <Tab active={pathname === '/'} onClick={() => pushNavigation('/')}>Início</Tab>
            <Tab active={pathname === '/player'} onClick={() => pushNavigation('/player')}>Ranking</Tab>
        </Container>
    );
};
  
export default Tabs;
  
import React from 'react';

import MainLayout from './layouts/MainLayout/MainLayout';

import './App.css';
import './styles/global.scss';

import RouterConfig from './constants/RouterConfig';

function App() {
    return (
        <div className="App">
            <MainLayout>
                <RouterConfig />
            </MainLayout>
        </div>
    );
}

export default App;

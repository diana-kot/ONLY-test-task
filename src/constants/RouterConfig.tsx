import { Routes, Route } from 'react-router-dom';

import { routerPath } from './routerPath';

import SliderPage from 'pages/SliderPage/SliderPage';


export default function RouterConfig() {
    const routesConfig = [
        {
            path: routerPath.MAIN_PAGE,
            element: <SliderPage />,
        },
    ];

    return (
        <Routes>
            {routesConfig.map((route, index) => {
                return <Route key={index} path={route.path} element={route.element} />;
            })}
        </Routes>
    );
}

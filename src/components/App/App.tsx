import { useRoutes } from 'react-router-dom';
import { routeConfig } from '../../routes/routesConfig';
import { NavBlock } from '../NavBlock/NavBlock';

export const App = () => {
    const router = useRoutes(routeConfig);
    return (
        <div className="container">
            <NavBlock />
            {router}
        </div>
    );
};

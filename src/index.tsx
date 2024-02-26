import { createRoot } from 'react-dom/client';

import './styles.scss';
import { App } from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

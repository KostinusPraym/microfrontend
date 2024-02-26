import { Link } from 'react-router-dom';

export const NavBlock = () => {
    return (
        <div className="nav-block">
            <Link to="/infinite-scroll">InfiniteScroll</Link>
            <Link to="/pagination">Pagination</Link>
        </div>
    );
};

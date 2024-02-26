import { useEffect, useState } from 'react';
import { PaginationList } from './components/PaginationList/PaginationList';
import { getFetch } from '../../utils/fetchData';
import { IState } from '../InfiniteScroll/components/PostList/PostList';
import { Paginator } from './components/Paginator/Paginator';
import { PaginationProvider } from './context/PaginationProvider';

export const Pagination = () => {
    const [posts, setPosts] = useState<IState>({ postsArr: [], page: 1 });

    useEffect(() => {
        getFetch().then((data: any) => {
            setPosts({ postsArr: [...posts.postsArr, ...data], page: posts.page + 1 });
        });
    }, []);

    return (
        <PaginationProvider>
            <div className="pagination">
                <PaginationList posts={posts.postsArr} />
                <Paginator setPosts={setPosts} />
            </div>
        </PaginationProvider>
    );
};

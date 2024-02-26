import { createRef, useEffect, useRef, useState } from 'react';
import { PostItem } from '../PostItem/PostItem';
import { getFetch } from '../../../../utils/fetchData';
import { IPost } from '../../../../types';

export interface IState {
    postsArr: IPost[];
    page: number;
}

export const PostList = () => {
    const [posts, setPosts] = useState<IState>({ postsArr: [], page: 1 });
    const lastItem = createRef();
    const observerLoader: any = useRef<IntersectionObserver>();
    const responseEmpty: any = useRef(false);

    const actionInSight = async (entries: any) => {
        if (entries[0].isIntersecting && !responseEmpty.current) {
            observerLoader.current.disconnect();
            const data = await getFetch(posts.page);
            setPosts({ postsArr: [...posts.postsArr, ...data], page: posts.page + 1 });

            if (!data.length) {
                responseEmpty.current = true;
            }
        }
    };

    useEffect(() => {
        getFetch().then((data: any) => {
            setPosts({ postsArr: [...posts.postsArr, ...data], page: posts.page + 1 });
        });
    }, []);

    useEffect(() => {
        if (observerLoader.current) {
            observerLoader.current.disconnect();
        }

        observerLoader.current = new IntersectionObserver(actionInSight, { threshold: 0.5 });

        if (lastItem.current) {
            observerLoader.current.observe(lastItem.current);
        }
    }, [lastItem]);

    return (
        <div className="post-list">
            {posts.postsArr.map(({ id, title }, index, array) => {
                if (array.length === index + 1) {
                    return <PostItem key={id} title={title} number={index + 1} ref={lastItem} />;
                } else return <PostItem key={id} title={title} number={index + 1} />;
            })}
        </div>
    );
};

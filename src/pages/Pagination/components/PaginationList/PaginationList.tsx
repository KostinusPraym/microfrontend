import { IPost } from '../../../../types';
import { PostItem } from '../../../InfiniteScroll/components/PostItem/PostItem';

interface IProps {
    posts: IPost[];
}
export const PaginationList = ({ posts }: IProps) => {
    return (
        <div className="pagination-list">
            {posts.map(({ id, title }) => (
                <PostItem key={id} title={title} number={id} />
            ))}
        </div>
    );
};

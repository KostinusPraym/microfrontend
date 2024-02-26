import { forwardRef } from 'react';

interface PostItemProps {
    title: string;
    number: number;
}

// eslint-disable-next-line react/display-name
export const PostItem = forwardRef(({ title, number }: PostItemProps, ref: any) => {
    return (
        <div ref={ref} className="post-item">
            {number + '. ' + title}
        </div>
    );
});

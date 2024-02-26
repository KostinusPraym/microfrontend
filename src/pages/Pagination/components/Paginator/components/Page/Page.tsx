import { useContext } from 'react';
import { PaginationContext } from '../../../../context/PaginationProvider';

export const Page = ({ count, handleClick }: any) => {
    const {
        currentPageState: { currentPage },
    }: any = useContext(PaginationContext);

    return (
        <div onClick={() => handleClick(count)} className={`page ${count === currentPage ? 'active-page' : ''}`}>
            {count}
        </div>
    );
};

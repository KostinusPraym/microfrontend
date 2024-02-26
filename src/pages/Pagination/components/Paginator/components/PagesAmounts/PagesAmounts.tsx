import { useContext } from 'react';
import { Page } from '../Page/Page';
import { PaginationContext } from '../../../../context/PaginationProvider';

export const PagesAmounts = ({ handleChangePage }: any) => {
    const COUNT_PAGES = 5;
    const pages = Array(COUNT_PAGES).fill(true);

    const {
        currentPageState: { currentPage },
    }: any = useContext(PaginationContext);

    const handleClick = (count: number) => {
        handleChangePage(count);
    };

    return (
        <ul className="pages-amounts">
            {pages.map((_, index) => (
                <Page key={index} count={index + 1} handleClick={handleClick} />
            ))}
            {currentPage > COUNT_PAGES && (
                <>
                    <span className="pages-dots">...</span>
                    {currentPage - COUNT_PAGES > 1 && <Page count={currentPage - 1} handleClick={handleClick} />}
                    <Page count={currentPage} handleClick={handleClick} />
                </>
            )}
        </ul>
    );
};

import { useContext, useState } from 'react';

import { NextStep } from './components/NextStep/NextStep';
import { PreviousStep } from './components/PreviousStep/PreviousStep';
import { PagesAmounts } from './components/PagesAmounts/PagesAmounts';

import { getFetch } from '../../../../utils/fetchData';
import { PaginationContext } from '../../context/PaginationProvider';
import { IPost } from '../../../../types';


export const Paginator = ({ setPosts }: any) => {
    const {
        currentPageState: { currentPage, setCurrentPage },
    }: any = useContext(PaginationContext);

    const [disabled, setDisabled] = useState({ previousStep: false, nextStep: false });
    const disabledPrev = currentPage === 1;

    const isDisabled = (data: IPost[]): boolean => {
        if (!data.length) {
            setDisabled((prev) => ({ ...prev, nextStep: true }));
            return true;
        } else {
            setDisabled((prev) => ({ ...prev, nextStep: false }));
            return false;
        }
    };

    const handleChangePage = async (pageAmount: number) => {
        const data = await getFetch(pageAmount);

        if (isDisabled(data)) return;

        setCurrentPage(pageAmount);
        setPosts({ postsArr: data, page: pageAmount });
    };

    return (
        <div className="paginator">
            <PreviousStep disabled={disabledPrev} togglePreviousStep={() => handleChangePage(currentPage - 1)} />
            <PagesAmounts handleChangePage={handleChangePage} />
            <NextStep disabled={disabled.nextStep} toggleNextStep={() => handleChangePage(currentPage + 1)} />
        </div>
    );
};

import { createContext, useState } from 'react';

export const PaginationContext = createContext({});

export const PaginationProvider = ({ children }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const defaultValues = {
        currentPageState: { currentPage, setCurrentPage },
    };

    return <PaginationContext.Provider value={defaultValues}>{children}</PaginationContext.Provider>;
};

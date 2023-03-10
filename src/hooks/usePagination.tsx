import { useMemo, useState } from 'react';

export const usePagination = (count: number = 0, pageSize: number = 10) => {
    const [page, setPage] = useState<number>(0);

    const shouldLoadMore = useMemo(() => {
        return count! / pageSize > page + 1
    }, [count, page, pageSize])

    return { page, shouldLoadMore, setPage }
}

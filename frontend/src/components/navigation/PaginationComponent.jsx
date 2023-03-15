import React from 'react';
import { Pagination } from 'react-bootstrap';

function PaginationComponent({ activePage, pageCount, onPageChange }) {
    const pageItems = [];

    for (let pageNumber = activePage - 2; pageNumber <= activePage + 2; pageNumber++) {
        if (pageNumber > 0 && pageNumber <= pageCount) {
            pageItems.push(
                <Pagination.Item
                    key={pageNumber}
                    active={pageNumber === activePage}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </Pagination.Item>
            );
        }
    }

    return (
        <Pagination className="justify-content-center">
            { activePage > 3 && (
                <Pagination.First key={1} onClick={() => onPageChange(1)}>
                    1
                </Pagination.First>
            )}
            {activePage > 4 && <Pagination.Ellipsis/>}
            {pageItems}
            {activePage < pageCount - 3 && <Pagination.Ellipsis />}
            {activePage < pageCount - 2 && (
                <Pagination.Last key={pageCount} onClick={() => onPageChange(pageCount)}>
                    {pageCount}
                </Pagination.Last>
            )}
        </Pagination>
    );
}

export default PaginationComponent;

import React from 'react'
import { Pagination } from 'react-bootstrap';

export const pagination = ({dataPerPage, totalData, paginate}) => {

    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalData /  dataPerPage); index++) {
        pageNumbers.push(index);
    }


    return (
            <div>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />

                        {pageNumbers.map(number => (
                            <Pagination.Item key={number} onClick={() => paginate(number)}>
                                    {number}
                            </Pagination.Item>
                        ))}

                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
    )
}

export default pagination

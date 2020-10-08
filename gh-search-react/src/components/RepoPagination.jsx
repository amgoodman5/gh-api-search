import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

export default function RepoPagination({ page, setPage }) {

    return (
        <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{page - 1}</Pagination.Item>
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Item>{page + 1}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    )
}
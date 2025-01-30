import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, setCurrentPage } from '../../redux/slices/filterSlice'

import styles from './Pagination.module.scss'

const Pagination = () => {
  const dispatch = useDispatch()
  const { currentPage } = useSelector(selectFilter)

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  )
}

export default Pagination

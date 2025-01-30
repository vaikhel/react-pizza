import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoryId } from '../redux/slices/filterSlice'

export default function Categories() {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]
  const categoryId = useSelector((state) => state.filter.categoryId)
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => dispatch(setCategoryId(i))}
              className={categoryId === i ? 'active' : ''}
            >
              {categoryName}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

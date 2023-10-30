import React from 'react'
import './styles.css'

export default function ItemList({title,description,url}) {
  return (
    <div className='item-list'>
      <h5><a href={url}>{title}</a></h5>
      <p>{description}</p>
      <hr />
    </div>
  )
}

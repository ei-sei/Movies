import React from 'react'

export default function ShowCard({ show }) {
  return (
    <div className='show-card'>
      <div><img src={show.image.medium} /></div>
      <div>
        <div> {show.rating.average}</div>
        <h2> {show.name} </h2>
        <p> {show.language}, {show.premiered}</p>
        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>

      </div>
    </div>
  )
}

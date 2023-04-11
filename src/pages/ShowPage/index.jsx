import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShowCard } from '../../components';


export default function ShowPage() {
  const { id } = useParams();
  const [show, setShows] = useState({image: {}, rating: {}});

  useEffect(() => {
    async function displayShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
      const data = await response.json();
      setShows(data)
    }

    displayShow();
  }, [])

  return (
    <ShowCard show={show} />

  )
}

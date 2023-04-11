import React from 'react'
import { ShowCard } from '../'

export default function ShowList({ shows }) {
    return (
        <>
            {shows.map(s => s.image ? <ShowCard show={s} key={s.id} /> : "")}
        </>
    )
}

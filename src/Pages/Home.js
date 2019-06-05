import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [breweries, setBreweries] = useState([])
  const [state, setTheState] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_state=indiana&page=1&per_page=50`)
      .then(resp => {
        setBreweries(resp.data)
      })
  }, [])

  const searchBrewery = e => {
    e.preventDefault()
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_state=${state}&page=1&per_page=50`)
      .then(resp => {
        setBreweries(resp.data)
      })
  }

  return (
    <div>
      <form onSubmit={searchBrewery}>
        <input
          type="text"
          placeholder="state"
          value={state}
          onChange={e => {
            setTheState(e.target.value)
          }}
        />
        <button type="submit">Search</button>
        <ul>
          {breweries.map((brewery, index) => {
            return (
              <li key={index}>
                <h3>{brewery.name}</h3>
                <p>{brewery.state}</p>
              </li>
            )
          })}
        </ul>
      </form>
    </div>
  )
}

import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
    console.log(newType.target.value)
    this.setState({
      filters: { type: newType.target.value}
    })
    console.log(this.state)
  }

  onFindPetsClick = () => {
    // console.log(this.state.filters.type)
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(response => response.json())
      .then(data => {
        console.log("data all", data)
        this.setState({
          ...this.state, 
          pets: data
        })

      })
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(data => {
        console.log("data with filter", data)
        this.setState({
          ...this.state, 
          pets: data
        })
      })
    }
  }

  onAdoptPet = (petId) => {
    const rightPet = this.state.pets.find(pet => pet.id === petId)
    rightPet.isAdopted = true
  }

  render() {
    console.log('state', this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

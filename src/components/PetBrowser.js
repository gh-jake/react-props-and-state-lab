import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let allPets = this.props.pets.map(pet => {
      console.log('pet browser', pet)
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })

    return <div 
    className="ui cards">
      {
        allPets
      }
    </div>
  }
}

export default PetBrowser

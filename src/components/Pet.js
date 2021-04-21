import React from 'react'

class Pet extends React.Component {

  // determineButton = () => {
  //   if (this.props.pet.isAdopted === true) {
  //     return <button className="ui primary button">Adopt pet</button>
  //   }
  //   else {
  //     return <button className="ui disabled button">Already adopted</button>
  //   }
  // }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  
  render() {
    console.log('pet component', this.props.pet.isAdopted)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {
              this.props.pet.gender === 'female' ? '♀' : '♂'
              
            /*'♀' OR '♂' */
            }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            this.props.pet.isAdopted === false ? <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>
          }
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet

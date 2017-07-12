import React from 'react'

class Squares extends React.Component {
  constructor( props ) {
    super ( props )
    this.state = {
      selectedSquare: undefined
    }
  }

  handleClick( event, index ) {

    // this.setState( { selectedSquare: event.index } )
    this.props.save(event.index)

  }

  render() {
  console.log(this.state.selectedSquare)
    const allSqr = this.props.gc.gc.map( ( symbol, index ) => {
      return <div id="square" key={ index } onClick={(e) => {this.handleClick( { index  } )}}> { symbol } </div>
    })
    return(
      <div id="squares" >
        { allSqr }
      </div>
    )
  }
}

export default Squares


import React from 'react'
import { Board } from '../components/Board.jsx'

class Container extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {
      gameController: new Array(9).fill(null),
      symbol: "X"
    }
  }
  
  saveToGameController(index) {
    let newGameController = this.state.gameController
    newGameController[index] = this.state.symbol
    this.setState({ gameController: newGameController  })
    if(this.state.symbol === "X"){
      this.setState( { symbol: "O" } )
    }else{
      this.setState( { symbol: "X" } )
    }
  }
  render() {
   
    return(
      <Board save={this.saveToGameController.bind(this)} gc={this.state.gameController}/>
    )
  }

}

export default Container
import React from 'react'

import ChooseExamples from './ChooseExamples'
import ShowExamples from './ShowExamples'

import tileData from '../tileData'

class TrainWithExamples extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      examples: {
        positiveItems: Array(tileData['positiveItems'].length).fill(false),
        negativeItems: Array(tileData['negativeItems'].length).fill(false)
      },
      hasChosenExamples: false
    }
    this.numberOfExamples = 3
  }

  handleClickExample = (items, index) => {
    const newExamples = this.state.examples;
    newExamples[items][index] = !newExamples[items][index];
    this.setState({examples: newExamples});
  }

  getSelectedParallelograms = () => {
    var parallelograms = []
    for (let items in this.state.examples){
      for (var ind = 0; ind < this.state.examples[items].length; ind++){
        if (this.state.examples[items][ind])
          parallelograms.push(tileData[items][ind].img);
      }
    }
    return parallelograms;
  }

  render () {
    if (!this.state.hasChosenExamples) {
      return (
        <ChooseExamples
          onSubmit={() => this.setState({hasChosenExamples: true})}
          onClickExample={this.handleClickExample}
          numberOfExamples={this.numberOfExamples}
          examples={this.state.examples}
        />
      )
    } else {
      return (
        <ShowExamples
          parallelograms={this.getSelectedParallelograms()}
          numberOfExamples={this.numberOfExamples}
        />
      )
    }
  }
}

export default TrainWithExamples
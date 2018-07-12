import React from 'react'

import ChooseExamples from './ChooseExamples'
import ShowExamples from './ShowExamples'
import PropTypes from 'prop-types'

import parallelogramData from '../ParallelogramData'

class TrainWithExamples extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      examples: Array(parallelogramData.length).fill(false),
      hasChosenExamples: false
    }
    this.numberOfExamples = 3
  }

  handleClickExample = (index) => {
    const newExamples = this.state.examples
    newExamples[index] = !newExamples[index]
    this.setState({examples: newExamples})
  }

  getSelectedParallelograms = () => {
    var parallelograms = []
    for (var ind = 0; ind < this.state.examples.length; ind++) {
      if (this.state.examples[ind]) {
        parallelograms.push(parallelogramData[ind].src)
      }
    }
    return parallelograms
  }

  render () {
    if (!this.state.hasChosenExamples) {
      return (
        <ChooseExamples
          onSubmit={() => this.setState({hasChosenExamples: true})}
          onClickExample={this.handleClickExample}
          numberOfExamples={this.numberOfExamples}
          examples={this.state.examples}
          onBackNavigation={this.props.getBackToMenu}
        />
      )
    } else {
      return (
        <ShowExamples
          parallelograms={this.getSelectedParallelograms()}
          numberOfExamples={this.numberOfExamples}
          getBackToMenu={this.props.getBackToMenu}
        />
      )
    }
  }
}

TrainWithExamples.propTypes = {
  getBackToMenu: PropTypes.func.isRequired
}

export default TrainWithExamples
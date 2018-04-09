import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Foo extends Component {

static propTypes={
names:PropTypes.array.isRequired,
color:PropTypes.string.isRequired
}

  render() {
    return (
      <div>
        getDerivedStateFromProps
      </div>
    )
  }
}

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Logo extends Component {
  render() {
    return (
        <Link to="/">
        <h4 className="app-logo text-center">ExStories</h4>
        </Link>
    )
  }
}
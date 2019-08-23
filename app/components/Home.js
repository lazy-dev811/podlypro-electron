// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import routes from '../constants/routes.json';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>PodlyPro</h2>
        <Link to={routes.WORKSPACE}>Go to Workspace</Link>
      </div>
    );
  }
}

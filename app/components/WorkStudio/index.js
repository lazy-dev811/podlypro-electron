import React, { Component } from 'react';

import Ruler from './Ruler';
import ControlBar from './ControlBar';
import styles from './index.css';

type Props = {};

export default class WorkStudio extends Component {
  props: Props;

  render() {
    const from = 100;
    const to = 150;
    return (
      <div className={styles.container}>
        <Ruler from={from} to={to} />
        <span>Work Studio</span>
        <ControlBar />
      </div>
    );
  }
}

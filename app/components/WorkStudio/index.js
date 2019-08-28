import React, { Component } from 'react';

import Ruler from './Ruler';
import Annotation from './Annotation';
import AudioEdit from './AudioEdit';
import AudioEffect from './AudioEffect';
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
        <Annotation status="NEW" />
        <AudioEdit />
        <AudioEffect />
        <ControlBar />
      </div>
    );
  }
}

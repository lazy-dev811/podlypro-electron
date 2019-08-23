import React, { Component } from 'react';

import Ruler from './Ruler';
// import Tracks from './Tracks/Tracks';
import Controller from '../containers/Controllers';
import styles from './Work.css';

type Props = {};

export default class Work extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <h3>PodlyPro</h3>
        <Controller />
        <div className={styles.main}>
          <Ruler />
          {/* <Tracks /> */}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

import styles from './index.css';

export default class AudioEffect extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.effectContent}>Intro audio</div>
      </div>
    );
  }
}

import React, { Component } from 'react';

import styles from './index.css';

type Props = {};

export default class ControlBar extends Component {
  props: Props;

  onZap = () => {
    console.log('clicked on zap');
  };

  onSlice = () => {
    console.log('clicked on slice');
  };

  onDelete = () => {
    console.log('clicked on delete');
  };

  onToStart = () => {
    console.log('clicked on skipToStart');
  };

  onPlay = () => {
    console.log('clicked on play');
  };

  onPause = () => {
    console.log('clicked on pause');
  };

  onToEnd = () => {
    console.log('clicked on skipToEnd');
  };

  onZoom = () => {
    console.log('clicked on zoom');
  };

  handleChangeOfZoom = evt => {
    console.log('changed zoom value: ', evt.target.value);
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contents}>
          <button type="button" className={styles.ctlBtn} onClick={this.onZap}>
            <img src="./assets/icons/zap.svg" alt="Zap" />
          </button>
          <button
            type="button"
            className={styles.ctlBtn}
            onClick={this.onSlice}
          >
            <img src="./assets/icons/slice.svg" alt="Slice" />
          </button>
          <button
            type="button"
            className={styles.ctlBtn}
            onClick={this.onDelete}
          >
            <img src="./assets/icons/delete.svg" alt="Delete" />
          </button>
          <div className={styles.divider} />
          <button
            type="button"
            className={styles.ctlBtn}
            onClick={this.onToStart}
          >
            <img src="./assets/icons/skip_to_start.svg" alt="STS" />
          </button>
          <button type="button" className={styles.ctlBtn} onClick={this.onPlay}>
            <img src="./assets/icons/play.svg" alt="Play" />
          </button>
          <button
            type="button"
            className={styles.ctlBtn}
            onClick={this.onPause}
          >
            <img src="./assets/icons/pause.svg" alt="Pause" />
          </button>
          <button
            type="button"
            className={styles.ctlBtn}
            onClick={this.onToEnd}
          >
            <img src="./assets/icons/skip_to_end.svg" alt="STE" />
          </button>
          <div className={styles.divider} />
          <button type="button" className={styles.ctlBtn} onClick={this.onZoom}>
            <img src="./assets/icons/zoom.svg" alt="Zoom" />
          </button>
          <input
            type="range"
            min="1"
            max="100"
            defaultValue="50"
            onChange={this.handleChangeOfZoom}
            className={styles.slider}
            id="zoomRange"
          />
        </div>
      </div>
    );
  }
}

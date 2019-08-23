import React, { Component } from 'react';
import FileProcessor from 'react-file-processor';

import styles from './index.css';

type Props = {};

export default class Controller extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.audioFileInput = null;
  }

  handleClick = () => {
    console.log('this:', this);
    this.audioFileInput.chooseFile();
  };

  handleFileSelect = (e, files) => {
    console.log(e, files);
  };

  render() {
    return (
      <div className={styles.container}>
        <FileProcessor
          ref={el => {
            this.audioFileInput = el;
          }}
          onFileSelect={this.handleFileSelect}
        >
          <button type="button" onClick={this.handleClick}>
            Open Local File
          </button>
        </FileProcessor>
        <div className={styles.ctlContainer}>
          <div className={styles.ctlBtnGroup}>
            {/* TODO : use material icon or font awesome icon */}
            <button type="button" className={styles.ctlBtn}>
              Preview
            </button>
            <button type="button" className={styles.ctlBtn}>
              Reverse
            </button>
            <button type="button" className={styles.ctlBtn}>
              Stop
            </button>
            <button type="button" className={styles.ctlBtn}>
              Play
            </button>
            <button type="button" className={styles.ctlBtn}>
              Next
            </button>
          </div>
          <div className={styles.ctlBtnGroup}>
            {/* TODO : use material icon or font awesome icon */}
            <button type="button" className={styles.ctlBtn}>
              -2
            </button>
            <button type="button" className={styles.ctlBtn}>
              -1.5
            </button>
            <button type="button" className={styles.ctlBtn}>
              -1
            </button>
            <button type="button" className={styles.ctlBtn}>
              -0.5
            </button>
            <button type="button" className={styles.ctlBtn}>
              0
            </button>
            <button type="button" className={styles.ctlBtn}>
              0.5
            </button>
            <button type="button" className={styles.ctlBtn}>
              1
            </button>
            <button type="button" className={styles.ctlBtn}>
              1.5
            </button>
            <button type="button" className={styles.ctlBtn}>
              2
            </button>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import FileProcessor from 'react-file-processor';
import MenuItem from './MenuItem';

import styles from './index.css';

type Props = {};

export default class Sidebar extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.audioFileInput = null;
  }

  closeProject = () => {
    console.log('close project');
  };

  insertTextAnnotation = () => {
    console.log('insert text annotation');
  };

  insertAudio = () => {
    this.fileInput.chooseFile();
  };

  handleFileSelect = (e, files) => {
    console.log(e, files);
  };

  insertSoundEffect = () => {
    console.log('insert sound effect');
  };

  recordFromMic = () => {
    console.log('record from mic');
  };

  recordPhoneCall = () => {
    console.log('record phone call');
  };

  exportPodcast = () => {
    console.log('export podcast');
  };

  render() {
    const isActiveBtn = true;
    return (
      <div className={styles.container}>
        <div className={styles.title}>Project Name</div>
        <MenuItem
          name="Close Project"
          status={false}
          onClicked={this.closeProject}
        />
        <div className={styles.divider} />
        <MenuItem
          name="Insert text annotation"
          status={isActiveBtn}
          onClicked={this.insertTextAnnotation}
        />
        <div className={styles.fileProcessor}>
          <FileProcessor
            ref={el => {
              this.fileInput = el;
            }}
            onFileSelect={this.handleFileSelect}
          >
            <MenuItem
              name="Insert audio from file"
              status={isActiveBtn}
              onClicked={this.insertAudio}
            />
          </FileProcessor>
        </div>
        <MenuItem
          name="Insert sound effect"
          status={isActiveBtn}
          onClicked={this.insertSoundEffect}
        />
        <MenuItem
          name="Record from mic"
          status={isActiveBtn}
          onClicked={this.recordFromMic}
        />
        <MenuItem
          name="Record phone call"
          status={false}
          onClicked={this.recordPhoneCall}
        />
        <MenuItem
          name="Export podcast"
          status={isActiveBtn}
          onClicked={this.exportPodcast}
        />
      </div>
    );
  }
}

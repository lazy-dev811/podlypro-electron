import React, { Component } from 'react';

import MenuItem from './MenuItem';
import DropZone from './DropZone';

import styles from './index.css';

type Props = {};

export default class Sidebar extends Component {
  props: Props;

  closeProject = () => {
    console.log('close project');
  };

  insertTextAnnotation = () => {
    console.log('insert text annotation');
  };

  insertAudio = files => {
    console.log('insert Audio file: ', files);
  };

  handleFileSelect = (e, file) => {
    console.log(e, file);
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
        <DropZone
          name="Insert audio from file"
          disabled={!isActiveBtn}
          onFilesAdded={this.insertAudio}
        />
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

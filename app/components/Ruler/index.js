import React, { Component } from 'react';
import ReactRuler from 'mb-sketch-ruler';
import styles from './index.css';

type Props = {};

const thick = 16;

export default class Ruler extends Component<Props> {
  props: Props;

  state = {
    scale: 2,
    startX: 0,
    startY: 0,
    lines: {
      h: [100, 200],
      v: [100, 200]
    }
  };

  componentDidMount() {
    this.$app.scrollLeft =
      this.$container.getBoundingClientRect().width / 2 - 300; // 300 = #screens.width / 2
  }

  componentDidUpdate(prevProps, prevState) {
    const { scale } = this.state;
    if (scale !== prevState.scale) {
      this.handleScroll();
    }
  }

  setAppRef = ref => {
    this.$app = ref;
  };

  setContainerRef = ref => {
    this.$container = ref;
  };

  handleScroll = () => {
    const screensRect = document
      .querySelector('#screens')
      .getBoundingClientRect();
    const canvasRect = document
      .querySelector('#canvas')
      .getBoundingClientRect();

    const { scale } = this.state;
    const startX = (screensRect.left + thick - canvasRect.left) / scale;
    const startY = (screensRect.top + thick - canvasRect.top) / scale;
    this.setState({ startX, startY });
  };

  handleWheel = e => {
    const { scale } = this.state;
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const nextScale = parseFloat(
        Math.max(0.2, scale - e.deltaY / 500).toFixed(2)
      );
      this.setState({ scale: nextScale });
    }
  };

  handleLine = lines => {
    this.setState({ lines });
  };

  render() {
    const { scale, startX, startY, lines } = this.state;
    const { h, v } = lines;

    const rectWidth = 160;
    const rectHeight = 200;

    const canvasStyle = {
      width: rectWidth,
      height: rectHeight,
      transform: `scale(${scale})`
    };
    const shadow = {
      x: 0,
      y: 0,
      width: rectWidth,
      height: rectHeight
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.scaleValue}>{`ZOOM: ${scale}`}</div>
        <ReactRuler
          thick={thick}
          scale={scale}
          width={582}
          height={200}
          startX={startX}
          startY={startY}
          shadow={shadow}
          horLineArr={h}
          verLineArr={v}
          handleLine={this.handleLine}
          cornerActive
          onCornerClick={this.handleCornerClick}
        />
        <div
          ref={this.setAppRef}
          id="screens"
          className={styles.screens}
          onScroll={this.handleScroll}
          onWheel={this.handleWheel}
        >
          <div ref={this.setContainerRef} className={styles.screenContainer}>
            <div id="canvas" className={styles.canvas} style={canvasStyle} />
          </div>
        </div>
      </div>
    );
  }
}

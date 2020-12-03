import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class VideoThumb extends Component {
  render() {
    return (
      <div>
        <ReactPlayer url="https://youtu.be/irNX7UT6cNA?t=1898" />
      </div>
    );
  }
}

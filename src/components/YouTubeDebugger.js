import React from 'react';

class YouTubeDebugger extends React.Component {
  changeBitrate = (event) => {
    // event.persist()
    // event.preventDefault()
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12,
      },
    })
  }

  changeResolution = (event) => {
    // event.persist()
    // event.preventDefault()
    this.setState({
      settings: {
      ...this.state.settings,
      video: {
        ...this.state.settings.video,
        resolution: '720p',
      }},
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  render() {
    return (
      <form>
        <button className='bitrate' onClick={this.changeBitrate}/>
        <button className='resolution' onClick={this.changeResolution}/>
      </form>
    )
  }
}

export default YouTubeDebugger;
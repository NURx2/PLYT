import { Component } from 'react';

//видосы и плейлисты будут храниться в localStorage

export default class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      title : this.props.title,
      dateOfBirth : Date.now(),
    }
  }

  addVideo = newVideo => {
    this.setState({
      videos: [
        ...this.state.videos,
        newVideo,
      ]
    })
  } 

  render() {
    return (
      <div className={playlist}>
        <ul>
        {

        }
        </ul>
      </div>
    );
  }
}

export default App;

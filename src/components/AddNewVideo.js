import React, { Fragment } from 'react'
import styles from './AddNewVideo.module.css'
import addImg from '../svg/add.svg'
import 'js-video-url-parser/lib/provider/youtube'
import urlParser from 'js-video-url-parser/lib/base'
import makeRequest from '../utils/makeRequest'


class AddNewVideo extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isClicked : false,
    }

    this.input = React.createRef();
  }

  addingOfPopUp = () => {
    this.setState({
      isClicked : true,
    })
  }

  removingOfPopUp = () => {
    this.setState({
      isClicked : false,
    })
  }

  prevent = (event) => {
    event.stopPropagation()
  }

  handleURL = () => {
    const parsedData = urlParser.parse(this.input.current.value)
    if (parsedData === undefined) {
      console.log("Неправильный URL") 
      return;  // показывать окно неудачного добавления
    }
    const curPlaylist = JSON.parse(localStorage.getItem(`pl[${this.props.playlistId}]`))
    const addedVideo = {
      id : parsedData.id,
      addingDate : Date.now(),
    }
    // проверять, что до этого не было видео с таким id
    makeRequest(
      `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${parsedData.id}`,
      response => {
        const thisData = JSON.parse(response)
        addedVideo.title = thisData.title
        addedVideo.preview = thisData.thumbnail_url.replace('hqdefault.jpg', 'mqdefault.jpg')
        curPlaylist.videos.push(addedVideo)
        console.log(addedVideo)
        localStorage.setItem(`pl[${this.props.playlistId}]`, JSON.stringify(curPlaylist))
        this.props.handleAdding()
        this.removingOfPopUp()
      },
      error => console.log(error)
    )  // показывать загрузку добавления, отрубать через некоторое время
  }

  render() {
    return (
      <Fragment>
        <button
          className={styles.container}
          type="button"
          onClick={this.addingOfPopUp}
          // onMouseOver={this.addingOfPlus}
          // onMouseOut={this.removingOfPlus}
        >
          <div className={styles.crossContainer}>
            <img src={addImg} className={styles.plus} />
          </div>
          <div className={styles.details}>
            <h4 className={styles.title}>Add a video</h4>
          </div>
        </button>
        {
          this.state.isClicked ?
          <Fragment>
            <div 
              className={styles.addingBackground} 
              onClick={this.removingOfPopUp}  // removing, при нажатии esc
            > 
              <div className={styles.popUpContainer} onClick={this.prevent}>
                <h3>Add a video</h3>
                <h4 className={styles.h4}>Insert the link below:</h4>
                  <input
                    placeholder="URL"
                    className={styles.input}
                    ref={this.input}
                  />  {/*сделать focused*/} 
                <div className={styles.addVideoBtnContainer}>
                  <button
                    type="submit"
                    className={styles.addVideoBtn}
                    onClick={this.handleURL}  // добавление, при нажатии на enter
                  > 
                    Add
                  </button>
                </div>
              </div> 
            </div>
          </Fragment> :
          false
        }
      </Fragment>
    )  
  }
}

export default AddNewVideo;
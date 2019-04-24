import React, {Fragment, Component} from 'react'

class Child extends Component {
  constructor(props) {
    super(props)

    this.state = {
      a : 5,
      b : 6,
    }
  }

  render() {return <div></div>}
};

export default class Kek extends Component {
  constructor(props) {
    super(props)

    const val = new Child();
    this.state = {
      aa : val.state.a,
    }
  }

  handleClick = () => {
    this.props.color = 'red';
  }
  
  render() {
    return (
      <Fragment>
        <div style={{color: this.props.color, fontSize: 80}}>
          {this.state.aa}
        </div>
        <button onClick={this.handleClick} style={{height:200, width:200}} />
      </Fragment>
    );
  }
};
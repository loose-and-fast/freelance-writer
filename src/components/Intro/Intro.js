import React, {Component} from 'react';
import {Grid, Image} from 'semantic-ui-react'
import style from './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Grid style={style} textAlign='center' verticalAlign='center' centered columns={1}>

        <Grid.Row centered columns={2}>
          <img src='carla.jpg' className="circular--portrait"/>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <div>
            <h5 className='intro__sub-description'>Lifestyle</h5>
            <div className='intro__sub-description'>
              &nbsp;&diams;&nbsp;
            </div>
            <h5 className='intro__sub-description'>Entertainment</h5>
            <div className='intro__sub-description'>
              &nbsp;&diams;&nbsp;
            </div>
            <h5 className='intro__sub-description'>Travel</h5>
          </div>
        </Grid.Row>

      </Grid>
    );
  }
}

export default Intro;

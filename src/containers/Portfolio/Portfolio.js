import React, {Component} from 'react'
import { Card, Grid, Header, Icon, Image, List } from 'semantic-ui-react'
import './Portfolio.css'
// import PortfolioSection from '../../components/PortfolioSection/PortfolioSection.js'
// import data from '../../portfolio.json'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        ["Interview", "interview"],
        ["Series & Features", "s&f"],
        ["Travel", "travel"],
        ["Blog", "blog"],
        ["Press Releases & Advertorial", "advert"],
        ["Book", "book"]
      ]
    }
  }

  render() {
    return (
      <div>
        <Grid.Row>
          <List size='big' as='ol'>
            <List.Item>
              <List.Content>
                <Header size='huge' className='page__title'>Portfolio</Header>
                <List.List as='ol' children={this.portfolioItems}></List.List>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Row>
        <Card>
          <Card.Content>
            <Card.Header>
              Snowman
              <Image src='https://i.pinimg.com/236x/b1/e9/05/b1e905065b933c63240dc500029250a5--christmas-time-christmas-ideas.jpg' />
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              The Snowman is a musician living at the North Pole.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>
              Matthew
              <Image src='/images/matthew.png' size='medium' />
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2018
              </span>
            </Card.Meta>
            <Card.Description>
              The Matthew is a hipster living in Austin, Texas.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

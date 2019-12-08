import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  async componentDidMount(){
    const pathanme = window.location.pathname
    const path = pathanme === '/' ? 'home' : pathanme.substring('1')
    this.setState({activeItem:path});
} 

  render() {
    const { activeItem } = this.state

    return (
        <Menu pointing secondary size='massive' color='teal'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link}
            to='/'
          />
        
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
              as={Link}
              to='login'
            />
            <Menu.Item
              name='register'
              active={activeItem === 'register'}
              onClick={this.handleItemClick}
              as={Link}
              to='register'
            />
            </Menu.Menu>
        </Menu>
    )
  }
}
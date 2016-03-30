import $ from 'jquery/dist/jquery.min.js'
import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import FlatButton from 'material-ui/lib/flat-button';
import classNames from 'classnames'
import MarkdownIt from 'markdown-it/dist/markdown-it'
import reactor from '../reactor.js'
import Common from '../modules/common/index.js'

const KEYS = {
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  SPACE: 32
}

export default React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      currentCard: Common.getters.currentCard
    }
  },

  md: new MarkdownIt(),

  spaceStyle: {
    margin: '1em',
    padding: '1em'
  },

  titleStyle: {
    "color": "rgba(0, 0, 0, .40)",
    "fontSize": "14px",
    "textTransform": "uppercase",
    "lineHeight": "56px"
  },

  state: {
    revealed: false
  },

  componentDidMount() {
    $(document.body).keydown(::this.handleKeyDown)
  },

  handleKeyDown(e) {
    if (e.keyCode === KEYS.SPACE) this.toggleRevealCard()
    if (e.keyCode === KEYS.ONE) this.clickButton('one')
    if (e.keyCode === KEYS.TWO) this.clickButton('two')
    if (e.keyCode === KEYS.THREE) this.clickButton('three')
    if (e.keyCode === KEYS.FOUR) this.clickButton('four')
  },

  clickButton(button) {
    console.log(this.refs[button])
    Common.actions.nextCard()
    Common.actions.createReview()
    // Object.keys(jsobj)
    // call action that uses API to set thing
    // when API comes back, dispatch that to store
  },

  toggleRevealCard() {
    this.setState((state, props) => state.revealed = !state.revealed)
  },

  render() {
    console.log(this.state)

    const classes = classNames({ hide: this.state.revealed })
    const card = this.state.currentCard
    if (!card) return null

    console.log('...?', card.toJS());
    const front = this.md.render(card.get('front'))
    const back = this.md.render(card.get('back'))

    return (
      <Paper zDepth={2} style={{'margin': '1em'}}>
        <Toolbar><ToolbarTitle text="Operating Systems > Bash" style={this.titleStyle} /></Toolbar>
        <div>
          <div style={this.spaceStyle} dangerouslySetInnerHTML={{__html: front}} />
          <div className={classes}>
            <Divider />
            <div style={this.spaceStyle} dangerouslySetInnerHTML={{__html: back}} />
            <div style={this.spaceStyle}>
              <FlatButton ref='one' label="today" secondary={true} />
              <FlatButton ref='two' label="3 days" secondary={true} />
              <FlatButton ref='three' label="10 days" secondary={true} />
              <FlatButton ref='four' label="45 days" secondary={true} />
            </div>
          </div>
        </div>
      </Paper>
    );
  }
})
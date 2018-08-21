import React, { Component } from 'react';
import { 
  View,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';

import ProjectCard from './ProjectCard';
import Main from './Main';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.2;

class ProjectDeck extends Component {
  static defaultProps = {
    onSwipeLeft: () => {},
    onSwipeRight: () => {}
  }

  constructor(props){
    super(props);

    // set an initial position value which will eventually be modified 
    // and then bound to the component we want to animate (ProjectCard)
    this.position = new Animated.ValueXY();

    // PanResponder lets me capture the users touch input, then apply that
    // gesutre position to the component position
    this.panResponder = PanResponder.create({

      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // updating the position as the user drags their finger accross the screen
        // this ends up firing A LOT
        this.position.setValue({ x: gesture.dx, y: gesture.dy });

      },
      // Oh you released your finger?
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {

          // was the card pretty far to the right?
          // then force it the rest of the way over
          this.forceSwipe('right');

        } else if (gesture.dx < -SWIPE_THRESHOLD) {

          // do the same on the left side
          this.forceSwipe('left');

        } else {

          // otherwise you probably can decide to I'll snap the card back home
          this.resetPosition();

        }
      }
    });

    this.state = { index: 0 }

  }

  // reset card index and re-render when we add new data
  componentWillReceiveProps = nextProps => {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }

  // force the card to swipe as far as the screen is wide in 300ms
  forceSwipe = direction => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: 300
    }).start(() => this.onSwipeComplete(direction));
  }

  // run the appropiate callback
  // reset the position for the next card
  // set the index +1 to correspond with the next card
  onSwipeComplete = direction => {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
  }

  resetPosition = () => {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  // get the actual styles from the current position
  // and apply the rotation
  getCardStyle = () => {
    // returns an interpolation object in which Animate.View can interpret
    const rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-40deg', '0deg', '40deg']
    });

    return {
      ...this.position.getLayout(),
      transform: [{ rotate }]
    }
  }


  renderCards() {

    // if no more cards in the deck to show
    if (this.state.index >= this.props.data.length) {
      return (
        <Animated.View style={styles.cardStyle}>
          <ProjectCard title="No More Projects" description="Try creating one!"  />
        </Animated.View>
      )
    }

    return this.props.data.map((project, i) => {
      if (i < this.state.index) { return null }
      if (i === this.state.index) {
        // render top card and apply panResponder stuff to it
        return (
          <Animated.View
            key={project.id}
            style={[styles.cardStyle, this.getCardStyle()]}
            {...this.panResponder.panHandlers}
          >
            <ProjectCard {...project} />
          </Animated.View>
        )
      }
      // render regular cards underneath
      return (
        <Animated.View
          key={project.id}
          style={[styles.cardStyle]}
        >
          <ProjectCard {...project} />
        </Animated.View>
      )
        
      // reverse the array the the animated panHandler card sits on top of the rest
    }).reverse();
  }

  render() {
    return (
      <Main>
        { this.renderCards() } 
      </Main>
    )
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH - 40,
    marginLeft: 20,
    marginRight: 20,
    // screen height -  (padding + header + tabbar - statusbar)
    // status bar is 44 on iPhone X
    height: SCREEN_HEIGHT - (40 + 43.5 + 48.5 - 20)
  }
}

export default ProjectDeck;
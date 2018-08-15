import React, { Component } from 'react';
import { 
  View,
  Text,
  Animated,
  PanResponder,
  Dimensions, 
  LayoutAnimation, 
  UIManager,
  ScrollView,
  StyleSheet
} from 'react-native';

import ProjectCard from './ProjectCard';

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
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({

      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy });

      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    });

    this.state = { index: 0 }

  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }

  componentWillUpdate = () => {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  forceSwipe = direction => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x, y: 0 }
    }).start(() => this.onSwipeComplete(direction));
  }

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
      return (
        <Animated.View
          key={project.id}
          style={[styles.cardStyle]}
        >
          <ProjectCard {...project} />
        </Animated.View>
      )
        

    }).reverse();
  }

  render() {
    // return this.renderCards();
    return (
      <View style={styles.container}>

        { this.renderCards() }
        
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    position: 'relative'
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    // screen height -  (margin + header + tabbar - statusbar)
    // status bar is 44 on iPhone X
    height: SCREEN_HEIGHT - (40 + 43.5 + 48.5 - 20)
  }
}

export default ProjectDeck;
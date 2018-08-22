import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList,
  PanResponder,
  Animated
} from 'react-native';
import { Haptic } from 'expo';

const THRESHOLD = 120


class ProjectListItem extends Component {
  constructor(props){
    super(props);

    this.position = new Animated.ValueXY();

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        this.props.enableScroll(false);
        return true
      },
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx < 0) {
          this.position.setValue({ x: gesture.dx, y: gesture.dy }); 
          if (gesture.dx < -THRESHOLD && !this.state.feedbackGiven) {
            this.setState({feedbackGiven: true});
            Haptic.selection();
          } else if (gesture.dx >= -THRESHOLD) {
            this.setState({feedbackGiven: false});
          } 
        }
      },
      onPanResponderRelease: (event, gesture) => {
        this.handleRelease(gesture.dx);
      },
      onPanResponderTerminate: (event, gesture) => {
        this.handleRelease(gesture.dx);
      },
    });
    this.state = {feedbackGiven: false};
  }

  handleRelease(gestureX) {
    this.props.enableScroll(true);
    this.forceSlide();
    if (gestureX < -THRESHOLD) {
      this.props.handleToolPress();
    }
  }

  forceSlide = () => {
    Animated.timing(this.position, {
      toValue: { x: 0, y: 0 },
      duration: 300
    }).start();
  }

  renderToolButton() {
    const { type } = this.props;
    const { toolButtonStyle, toolButtonTextStyle, toolButtonContainerStyle } = styles;
    return (
      <View style={toolButtonContainerStyle}>
        <View style={toolButtonStyle}>
          { this.state.feedbackGiven && <Text style={toolButtonTextStyle}>{type === 'created' ? 'Edit' : 'Leave'}</Text> }
        </View>
      </View>
    )
  }

  render() {
    const { project, handleProjectPress } = this.props;
    const {
      projectContainerStyle,
      projectTopViewStyle,
      projectTitleStyle,
      projectTitleTextStyle,
      projectResponderStyle,
      dotStyle
    } = styles;
    return (
      <View style={projectContainerStyle} {...this.panResponder.panHandlers}>

        { this.renderToolButton() }

        <Animated.View 
          style={[projectTopViewStyle, {
            transform: [
              { translateX: this.position.getLayout().left }
            ]
          }]} 
          
        >       
          <TouchableOpacity 
            key={project.id}
            onPress={() => {
              this.forceSlide(false);
              handleProjectPress();
            }}
            style={projectTitleStyle}
          >
            <Text style={projectTitleTextStyle}>{project.title}</Text>
          </TouchableOpacity>

          <View style={projectResponderStyle}>
            <View style={dotStyle} />
          </View> 

        </Animated.View>    
      </View>
    );
  }
}

const styles = {
  projectContainerStyle: {
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    marginBottom: 14,
    borderRadius: 6,
    overflow: 'hidden',
  },
  projectTopViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#8380B6',
    marginRight: 4,
    borderRadius: 6,
    overflow: 'hidden'
  },
  projectTitleStyle: {
    flex: 4
  },
  projectTitleTextStyle: {
    fontSize: 36,
    color: '#eee',
    fontWeight: 'bold',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#eee',
    shadowOpacity: 0.2,
    padding: 20
  },
  projectResponderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#5b597f',
    opacity: 0.8
  },
  toolButtonContainerStyle: {
    backgroundColor: '#fff3cf',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  toolButtonStyle: {
    width: 100,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolButtonTextStyle: {
    color: '#856404',
    fontSize: 18
  },

}

export default ProjectListItem;
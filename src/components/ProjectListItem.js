import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList,
  PanResponder,
  Animated
} from 'react-native';


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
        if (gesture.dx < 0 && gesture.dx > -200) {
          const offset = this.state.open ? 100 : 0
          this.position.setValue({ x: gesture.dx - offset, y: gesture.dy }); 
        }
      },
      onPanResponderRelease: (event, gesture) => {
        this.handleRelease(gesture.dx);
      },
      onPanResponderTerminate: (event, gesture) => {
        this.handleRelease(gesture.dx);
      },
    });

    this.state = { open: false }
  }

  handleRelease(gestureX) {
    this.props.enableScroll(true);
    if (gestureX > -100) {
      this.forceSlide(false);
    } else {
      this.forceSlide(true);
    }
  }

  forceSlide = open => {
    const xPosition = open ? -100 : 0;
    Animated.timing(this.position, {
      toValue: { x: xPosition, y: 0 },
      duration: 300
    }).start(() => {
      this.setState({ open });
    });
  }

  renderToolButton() {
    const { handleToolPress, type } = this.props;
    const { toolButtonStyle, toolButtonTextStyle, toolButtonContainerStyle } = styles;
    return (
      <View style={toolButtonContainerStyle}>
        <TouchableOpacity
          onPress={handleToolPress}
          style={toolButtonStyle}
        >
          <Text style={toolButtonTextStyle}>{type === 'created' ? 'Edit' : 'Leave'}</Text>
        </TouchableOpacity>
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
            onPress={() => handleProjectPress()}
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
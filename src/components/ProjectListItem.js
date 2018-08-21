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
  render() {
    const { project, handleProjectpress, handleToolPress } = this.props;
    const {
      projectContainerStyle,
      projectTopViewStyle,
      projectTitleStyle,
      projectTitleTextStyle,
      projectResponderStyle,
      toolButtonStyle,
      toolButtonTextStyle,
      dotStyle
    } = styles;
    return (
      <View style={projectContainerStyle} {...this.panResponder.panHandlers}>

        <TouchableOpacity
          onPress={handleToolPress}
          style={toolButtonStyle}
        >
          <Text style={toolButtonTextStyle}>Leave</Text>
        </TouchableOpacity>

        <Animated.View 
          style={[projectTopViewStyle, {
            transform: [
              { translateX: this.position.getLayout().left }
            ]
          }]} 
          
        >       
          <TouchableOpacity 
            key={project.id}
            onPress={() => {}}
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
    backgroundColor: '#fff3cf',
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
  toolButtonStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 100,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolButtonTextStyle: {
    fontSize: 18,
    color: '#856404'
  },
  dotStyle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#5b597f',
    opacity: 0.8
  }
}

export default ProjectListItem;
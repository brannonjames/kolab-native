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
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx < 0 && gesture.dx > -200) {
          this.props.enableScroll(false);
          this.position.setValue({ x: gesture.dx, y: 0 });
        }
      },
      onPanResponderRelease: (event, gesture) => {
        this.props.enableScroll(true);
        if (gesture.dx > -100) {
          this.forceSlide(false);
        } else {
          this.forceSlide(true);
        }
      }
    });

    this.state = { index: 0 }
  }

  forceSlide = open => {
    const xPosition = open ? -100 : 0;
    Animated.timing(this.position, {
      toValue: { x: xPosition, y: 0 },
      duration: 300
    }).start();
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
      toolButtonTextStyle
    } = styles;
    return (
      <View style={projectContainerStyle}>

        <TouchableOpacity
          onPress={handleToolPress}
          style={toolButtonStyle}
        >
          <Text style={toolButtonTextStyle}>Leave</Text>
        </TouchableOpacity>

        <Animated.View 
          style={[projectTopViewStyle, { ...this.position.getLayout() }]} 
        >
          <TouchableOpacity 
            key={project.id}
            onPress={() => {}}
            style={projectTitleStyle}
          >
            <Text style={projectTitleTextStyle} allowFontScaling={true}>{project.title}</Text>
          </TouchableOpacity>

          <View style={projectResponderStyle} {...this.panResponder.panHandlers} />

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
    position: 'relative',
    backgroundColor: '#fff3cf',
    overflow: 'hidden'
  },
  projectTopViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#8380B6',
    minHeight: 83,
    marginRight: 4,
    borderRadius: 6,
    overflow: 'hidden'
  },
  projectTitleStyle: {
    backgroundColor: '#8380B6',
    padding: 20,
    flex: 1
  },
  projectTitleTextStyle: {
    fontSize: 36,
    color: '#eee',
    fontWeight: 'bold',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#eee',
    shadowOpacity: 0.2
  },
  projectResponderStyle: {
    width: 75,
    backgroundColor: '#8380B6'
  },
  toolButtonStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 100,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  toolButtonTextStyle: {
    fontSize: 18,
    color: '#856404'
  }
}

export default ProjectListItem;
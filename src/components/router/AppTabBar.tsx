import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions, SceneProps } from 'react-native-router-flux';
import { TabBarIcons } from '../../constants/TabBar';

export default class AppTabBar extends Component<SceneProps> {
  render() {
    const { state } = this.props.navigation;
    const activeTabIndex = state.index;

    return (
      <View style={styles.container}>
        {state.routes.map((element: any) => {
          const icon = TabBarIcons.find(
            (icon) => icon.key == element.key.toUpperCase(),
          );
          const iconName: string = icon?.value || 'help';
          return (
            <TouchableOpacity
              key={element.key}
              onPress={() => Actions[element.key]()}
            >
              <Icon name={iconName} size={36} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-evenly' },
});

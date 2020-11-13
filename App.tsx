import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MapScreen, PointDetailScreen, PointsScreen } from './screens';

const AppNavigator = createStackNavigator({
  Map: {
    screen: MapScreen
  },
  Points: {
    screen: PointsScreen
  },
  Detail: {
    screen: PointDetailScreen
  }
}, {
  initialRouteName: 'Map'
});

export default createAppContainer(AppNavigator);

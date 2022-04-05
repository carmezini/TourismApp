import * as React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/Home'
import PlacesDetails from './src/screens/PlacesDetails'
import PlacesList from './src/screens/PlacesList'



const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  PlacesDetails: {screen: PlacesDetails},
  PlacesList: {screen: PlacesList}
});

const App = createAppContainer(MainNavigator);
export default App;
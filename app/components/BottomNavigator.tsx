import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationProps, BottomNavigationTab, Icon, IconElement } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { NavProps } from '../../configs/navigation';

const StIcon = (props?: any): IconElement => (
  <Icon
    {...props}
    name='home-outline'
  />
);

const NdIcon = (props?: any): IconElement => (
  <Icon
    {...props}
    name='book-open-outline'

  />
);

const RdIcon = (props?: any): IconElement => (
  <Icon
    {...props}
    name='menu-outline'
  />
);

const useBottomNavigationState = (initialState = 0): BottomNavigationProps => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

export const BottomNavigator = (): React.ReactElement => {
  
  const navigation = useNavigation<NavProps>();
  const bottomState = useBottomNavigationState();

  return (
		<BottomNavigation
			style={styles.bottomNavigation}
			{...bottomState}
      onSelect={index => navigation.navigate([index])}
		>
			<BottomNavigationTab icon={StIcon} onPress={() => navigation.navigate('Home')}/>
			<BottomNavigationTab icon={NdIcon} onPress={() => navigation.navigate('Products')}/>
			<BottomNavigationTab icon={RdIcon} />
		</BottomNavigation>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
		width: '100%',
  },
});
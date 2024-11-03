import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// component
import {Icon, Text, View} from '@/components/atoms';

// styles
import styles from './styles';
import {Colors} from '@constants';
import {scale} from '@utils';

const Icons = ({label, focus}: {label: string; focus: boolean}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <Icon name="icTabHomeActive" />
      ) : (
        <Icon name="icTabHomeInactive" />
      );
    case 'Statistics':
      return focus ? (
        <Icon name="icTabStatisticsActive" />
      ) : (
        <Icon name="icTabStatisticsInactive" />
      );
    case 'Settings':
      return focus ? (
        <Icon name="icTabSettingsActive" />
      ) : (
        <Icon name="icTabSettingsInactive" />
      );

    default:
      <Icon name="icTabHomeActive" />;
  }
};

const BottomNavigator: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {paddingBottom: insets.bottom ? insets.bottom : scale(8)},
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options?.title ?? route.name;

        const isFocused = state.index === index;
        const bgIndicator = isFocused ? Colors.MOOD_NEUTRAL : 'transparent';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={0.7}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.contentContainer}>
              <View
                style={[styles.indicator, {backgroundColor: bgIndicator}]}
              />
              <Icons label={label} focus={isFocused} />
              <Text style={isFocused ? styles.activeTab : styles.inActiveTab}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

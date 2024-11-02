import React from 'react';
import {
  DimensionValue,
  View as ViewRN,
  ViewProps,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {Colors} from '@constants';

type ColorType = keyof typeof Colors | (string & {});

interface CustomViewProps extends ViewProps {
  testID?: string;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingX?: number;
  paddingY?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginX?: number;
  marginY?: number;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  flex?: number;
  row?: boolean;
  column?: boolean;
  rowReverse?: boolean;
  columnReverse?: boolean;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  width?: DimensionValue;
  height?: DimensionValue;
  minWidth?: DimensionValue;
  minHeight?: DimensionValue;
  maxWidth?: DimensionValue;
  maxHeight?: DimensionValue;
  backgroundColor?: ColorType;
  opacity?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  style?: ViewStyle | ViewStyle[];
}

const View = React.forwardRef<ViewRN, CustomViewProps>((props, ref) => {
  const {
    testID,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingX,
    paddingY,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
    gap,
    rowGap,
    columnGap,
    flex,
    row,
    column,
    rowReverse,
    columnReverse,
    flexWrap,
    justifyContent,
    alignItems,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    backgroundColor,
    opacity,
    top,
    bottom,
    left,
    right,
    style,
    children,
    ...rest
  } = props;

  let flexDirection: ViewStyle['flexDirection'];

  if (row) {
    flexDirection = 'row';
  }
  if (column) {
    flexDirection = 'column';
  }
  if (rowReverse) {
    flexDirection = 'row-reverse';
  }
  if (columnReverse) {
    flexDirection = 'column-reverse';
  }

  const bgColorStyle = backgroundColor
    ? {
        backgroundColor:
          Colors[backgroundColor as keyof typeof Colors] || backgroundColor,
      }
    : {};

  const computedStyle: ViewStyle = {
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingHorizontal: paddingX,
    paddingVertical: paddingY,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal: marginX,
    marginVertical: marginY,
    gap,
    rowGap,
    columnGap,
    flex,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    backgroundColor,
    opacity,
    top,
    bottom,
    left,
    right,
  };

  const combinedStyle = StyleSheet.flatten([
    computedStyle,
    bgColorStyle,
    style,
  ]);

  return (
    <ViewRN ref={ref} testID={testID} style={combinedStyle} {...rest}>
      {children}
    </ViewRN>
  );
});

export default View;

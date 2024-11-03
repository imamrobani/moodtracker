import reactotron, {openInEditor} from 'reactotron-react-native';
import type {ReactotronReactNative} from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';

import {Reactotron} from './reactotron.interface';
import {reactotronRedux} from 'reactotron-redux';
import {storage} from '../mmkv/storage';

export const enableConsole = __DEV__;

// @ts-ignore
export const reactotronInstance: Reactotron = reactotron
  .use(mmkvPlugin<ReactotronReactNative>({storage}))
  .configure({
    name: 'Mood Tracker',
  }) // controls connection & communication settings
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
  }) // add all built-in react native plugins
  .use(openInEditor())
  .use(reactotronRedux());

if (enableConsole) {
  reactotronInstance.clear();
  reactotronInstance.connect();
}

// eslint-disable-next-line no-console
console.tron = reactotronInstance;

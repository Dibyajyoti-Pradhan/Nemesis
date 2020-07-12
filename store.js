import {applyMiddleware, createStore, compose} from 'redux';
import {offline} from '@redux-offline/redux-offline/';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

export const configuredStore = createStore(
  reducer,
  preloadedState,
  compose(applyMiddleware(middleware), offline(offlineConfig)),
);

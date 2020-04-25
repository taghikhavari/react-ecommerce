import {createSelector} from 'reselect';
import { rootState } from '../../models/redux';

const selectDirectory = (state: rootState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)
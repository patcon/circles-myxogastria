import createTypes from 'redux-create-action-types';

export default createTypes(
  'SAFE_CREATE',
  'SAFE_CREATE_ERROR',
  'SAFE_CREATE_SUCCESS',
  'SAFE_DEPLOY',
  'SAFE_DEPLOY_ERROR',
  'SAFE_DEPLOY_SUCCESS',
  'SAFE_FOUND',
  'SAFE_INITIALIZE',
  'SAFE_INITIALIZE_ERROR',
  'SAFE_INITIALIZE_SUCCESS',
  'SAFE_OWNERS',
  'SAFE_OWNERS_ADD',
  'SAFE_OWNERS_ADD_ERROR',
  'SAFE_OWNERS_ADD_SUCCESS',
  'SAFE_OWNERS_ERROR',
  'SAFE_OWNERS_REMOVE',
  'SAFE_OWNERS_REMOVE_ERROR',
  'SAFE_OWNERS_REMOVE_SUCCESS',
  'SAFE_OWNERS_SUCCESS',
  'SAFE_RESET',
);
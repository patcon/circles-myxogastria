import {
  getItem,
  hasItem,
  isAvailable,
  removeItem,
  setItem,
} from '~/services/storage';

const NONCE_NAME = 'nonce';

export function generateNonce() {
  return new Date().getTime();
}

export function getNonce() {
  if (!isAvailable()) {
    throw new Error('LocalStorage is not available');
  }

  if (hasNonce()) {
    return getItem(NONCE_NAME);
  }

  return null;
}

export function hasNonce() {
  return hasItem(NONCE_NAME);
}

export function setNonce(nonce) {
  setItem(NONCE_NAME, nonce);
}

export function removeNonce() {
  removeItem(NONCE_NAME);
}

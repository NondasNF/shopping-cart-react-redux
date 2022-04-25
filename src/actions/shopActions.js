export const INCREMENT_QUANTITY_IN_SHOP = 'INCREMENT_QUANTITY_IN_SHOP';
export const DECREMENT_QUANTITY_IN_SHOP = 'DECREMENT_QUANTITY_IN_SHOP';
export const RESTORE_QUANTITY_IN_SHOP = 'RESTORE_QUANTITY_IN_SHOP';

export function incrementQuantityInShop(item) {
  return {
    type: INCREMENT_QUANTITY_IN_SHOP,
    payload: item,
  };
}

export function decrementQuantityInShop(item) {
  return {
    type: DECREMENT_QUANTITY_IN_SHOP,
    payload: item,
  };
}

export function restoreQuantityInShop(item) {
  return {
    type: RESTORE_QUANTITY_IN_SHOP,
    payload: item,
  };
}

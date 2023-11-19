export const initialState = {
  items: [],
  total: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id != action.payload),
      };
    case "UPDATE_TOTAL":
      return {
        ...state,
        total: state.items.reduce((acc, curr) => acc + curr.price, 0),
      };
    default:
      break;
  }
};

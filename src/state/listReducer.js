export default function listReducer(state, action) {
  switch (action.type) {
    case "addItem":
      return addItem(state, action);
    case "editItem":
      return editItem(state, action);
    case "replaceList":
      return replaceList(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function addItem(state, action) {
  const { item } = action;

  if (item !== null) return [...state, item];
  return state;
}

function editItem(state, action) {
  const { editedItem } = action;
  const index = state.findIndex((item) => item.id === editedItem.id);
  const clonedState = [...state];

  clonedState[index] = editedItem;
  return clonedState;
}

function replaceList(action) {
  const { editedList } = action;

  return editedList;
}

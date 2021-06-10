export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

    case 'TOGGLE_TO_DO':
      return state.map(i => {
        return i.id === action.id ? { ...i, completed: !i.completed } : i;
      });

    default:
      return state;
  }
};

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
};

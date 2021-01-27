const initialState = {
  building: '',
  height: 1,
  material: '',
  sizex: '',
  sizey: '',
  status: '',
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BUILDING':
      return {
        ...state,
        building: action.payload
      };
    case 'SET_HEIGHT':
      return {
        ...state,
        height: action.payload
      };
    case 'SET_MATERIAL':
      return {
        ...state,
        material: action.payload
      };
    case 'SET_SIZE_X':
      return {
        ...state,
        sizex: action.payload
      };
    case 'SET_SIZE_Y':
      return {
        ...state,
        sizey: action.payload
      };
    case 'RESULT':
      return {
        ...state,
        status: action.payload.result,
        message: action.payload.message
      }
    case 'DENY':
      return {
        ...state,
        building: '',
        height: 1,
        material: '',
        sizex: '',
        sizey: '',
        status: '',
        message: ''
      }
    default:
      return state;
  }
}

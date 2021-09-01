// import  addDataItems  from "../Actions";

const initialState = {
  data: [],
};

const addDataToStore = (state = initialState, action) => {
  switch (action.type) {
    case "DATAADD":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "DATA_DELETE":
      const delet = state.data.filter((data) => data.id !== action.payload);
      console.log("delete items   ", delet);
      return {
        ...state,
        data: delet,
      };

    case "DATA_UPDATE":
      const index = state.data.findIndex((o) => o.id === action.payload.id);
      console.log("asd", index);

      const updateData = [...state.data];
      updateData[index] = action.payload;
      console.log("qwqw", updateData);

      return {
        ...state,
        data: updateData,
      };

    default:
      return state;
  }
};

export default addDataToStore;

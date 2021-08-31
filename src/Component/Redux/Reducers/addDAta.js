// import  addDataItems  from "../Actions";

const initialState = {
  data: [],
};

const addDataToStore = (state = initialState, action) => {
  switch (action.type) {
    case "DATAADD":
      return {
        ...state,
        data: [
          ...state.data,
          {
            data: action.payload,
          },
        ],
      };

    case "DATA_DELETE":
      const delet = state.data.filter((data) => 
        data.data.id !== action.payload
      );
      console.log("delete items   " ,delet);
      return {
        ...state,
        data: delet ,
      };


      case "DATA_UPDATE":

      console.log("qqq" , action.payload)
        // const indexU = state.data.findIndex(data => data.data.id === action.data.id)
        // const updateData = {...state.data , data:state.data[indexU].data}
        // return {
        //   ...state.slice(0,indexU), 
        //   updateData,
        //   ...state.slice(indexU , 1)
         
        // }; 

    default:
      return state;
  }
};

export default addDataToStore;

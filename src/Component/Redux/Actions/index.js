export const addDataItems = (data) => {
  return {
    type: "DATAADD",
    payload: data,
  };
};


export const deleteDataItems = (id) => {
    return {
      type: "DATA_DELETE",
      payload: id,
    };
  };

export const updateDataItems = (data) => {
    return {
      type: "DATA_UPDATE",
      payload: data,
    };
  };


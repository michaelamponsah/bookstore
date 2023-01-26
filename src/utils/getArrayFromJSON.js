const getArrayFromJSON = (data) => {
  const keys = Object.keys(data);

  return keys.map((key) => ({
    item_id: key,
    title: data[key][0].title,
    author: data[key][0].author,
    category: data[key][0].category,
  }));
};

export default getArrayFromJSON;

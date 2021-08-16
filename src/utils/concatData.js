const sortCity = (a, b) => {
  if (a.city < b.city) {
    return -1;
  }
  if (a.city > b.city) {
    return 1;
  }
  return 0;
};

const concatData = (prevData, newData) => {
  if (newData) {
    let finalData = prevData;
    newData.forEach((val) => {
      const existingData =
        finalData && finalData.find((data) => data.city === val.city);
      if (existingData) {
        existingData.aqi = val.aqi;
      } else {
        const newData = {
          city: val.city,
          aqi: val.aqi,
          recievedAt: new Date().toISOString(),
        };
        finalData.push(newData);
      }
    });
    return finalData.sort(sortCity);
  }
  return [];
};

export default concatData;

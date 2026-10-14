const chunkIntoRows = <T,>(arr: T[]): T[][] => {
  const rows: T[][] = [];

  for (let i = 0; i < arr.length; i += 2) {
    rows.push(arr.slice(i, i + 2));
  }

  return rows;
};

export default chunkIntoRows
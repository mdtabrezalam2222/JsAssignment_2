function calculateArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('Both length and width must be numbers.');
    }
  
    if (length <= 0 || width <= 0) {
      throw new Error('Length and width must be positive numbers.');
    }
  
    const area = length * width;
    return area;
  }
  const length = 5;
  const width = 8;
  const area = calculateArea(length, width);
  console.log(area); 
    
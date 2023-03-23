const scaleForRange = (oldValue, oldStart, oldEnd, newStart, newEnd) => {
  const oldRange = oldEnd - oldStart;
  const newRange = newEnd - newStart;

  
  const newValueOffset = Math.abs(((oldValue - oldStart) / oldRange) * newRange);
  const newValue = newValueOffset + newStart;

  return newValue;

}

export default scaleForRange;
function isWeekend(theDate) {
  const dayOfWeek = theDate.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export default isWeekend;
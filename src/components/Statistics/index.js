const colors = ['#00BFFF', '#1E90FF', '#00008B', '#4B0082'];

export const getColorByIndex = (percentage) => {
  const index = Math.floor((percentage / 100) * colors.length);
  return colors[index];
};

export { default } from './Statistics';

export default function getRandomColor() {
  const colors = [
    '#8A2BE2',
    '#A52A2A',
    '#5F9EA0',
    '#D2691E',
    '#6495ED',
    '#DC143C',
    '#00008B',
    '#008B8B',
    '#B8860B',
    '#006400',
    '#8B008B',
    '#8B0000',
    '#483D8B',
    '#2F4F4F',
    '#B22222',
    '#228B22',
    '#008000',
    '#4B0082',
    '#20B2AA',
    '#800000',
    '#C71585',
    '#191970',
    '#000080',
    '#6B8E23',
    '#FF4500',
    '#CD853F',
    '#800080',
    '#663399',
    '#FF0000',
    '#8B4513',
    '#2E8B57',
    '#A0522D',
    '#4682B4',
    '#FF6347',
  ];

  const randomColor = Math.round(Math.random() * 33);

  return colors[randomColor];
}

const COLORS_BY_ID = {
  1: 'orange',
  2: 'blue',
  3: 'red',
}

export default function getColorMarker() {
  const colorMarkerId = Math.ceil(Math.random() * 3)

  return COLORS_BY_ID[colorMarkerId] || 'orange'
}

const getColorById = id => {
  switch (id) {
    case 1:
      return 'orange'
    case 2:
      return 'blue'
    case 3:
      return 'red'
  }
  return 'orange'
}

export default function getColorMarker() {
  const colorMarkerId = Math.ceil(Math.random() * 3)

  return getColorById(colorMarkerId)
}

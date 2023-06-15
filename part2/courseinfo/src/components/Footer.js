const Footer = ({parts}) => {
  const totalExercises = () => {
    return parts.reduce((sum, part) => sum += part.exercises, 0)
  }

  return <p>Total Exercises {totalExercises()} </p>
}

export default Footer;
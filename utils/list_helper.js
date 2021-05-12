const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 1) {
    return blogs[0].likes
  }
  return blogs.length === 0 ? 0 : blogs.reduce((a, b) => a.likes + b.likes)
}

const favoriteBlog = (blogs) => {
  const likesArr = blogs.map((e) => e.likes)
  const max = Math.max(...likesArr)
  const favorite = blogs.filter((e) => e.likes === max)

  return favorite[0]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}

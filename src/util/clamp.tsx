// 100 is the max value for per_page on this GithubApi request
const clamp = (number: number, min: number = 0, max: number = 100) =>
  Math.max(Math.min(number, max), min)

export { clamp }

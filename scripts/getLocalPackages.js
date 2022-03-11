const fs = require('fs')

exports.getLocalPackages = function () {
  const packageJson = fs.readFileSync('./package.json').toString()
  const packageJsonData = JSON.parse(packageJson)

  const allDependencies = [
    ...Object.keys(packageJsonData.dependencies || {}),
    ...Object.keys(packageJsonData.devDependencies || {}),
  ]

  return allDependencies
}

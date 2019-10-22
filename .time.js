const fs = require('fs')

const questionTotal = 68

const questionNumbers = fs
  .readdirSync('./')
  .map(item => {
    const matchResult = item.match(/^[0-9]+/g)
    return matchResult ? Number(matchResult[0]) : null
  })
  .filter(item => item)

const leftQuestions = questionTotal - Math.max(...questionNumbers)

const diffTime = Number(new Date('2019-12-31')) - Number(new Date())
const leftDays = parseInt(diffTime / 1000 / 60 / 60 / 24)

const length = 50
const texts = [
  `2019 left *${leftDays}* days for you`,
  `to complete *${leftQuestions}* questions.`,
  `and you need finish ${(leftQuestions / leftDays).toFixed(1)} everyday.`,
]

const line = '-'.repeat(length)
console.log(line)
texts.forEach(text => {
  console.log(' '.repeat((length - text.length) / 2) + text)
})
console.log(line)

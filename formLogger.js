// formLogger.js
const fs = require("fs")
const path = require("path")

class FormLogger {
  constructor(logFilePath) {
    this.logFilePath =
      logFilePath || path.join(__dirname, "logs", "form_submissions.json")
    this.ensureLogFile()
  }

  ensureLogFile() {
    if (!fs.existsSync(this.logFilePath)) {
      fs.writeFileSync(this.logFilePath, JSON.stringify([]))
    }
  }

  logFormSubmission(data) {
    const logs = JSON.parse(fs.readFileSync(this.logFilePath, "utf8"))
    const timestamp = new Date().toISOString()
    logs.push({ timestamp, ...data })

    fs.writeFileSync(this.logFilePath, JSON.stringify(logs, null, 2))
  }

  getAllLogs() {
    return JSON.parse(fs.readFileSync(this.logFilePath, "utf8"))
  }

  findByUserId(userId) {
    const logs = this.getAllLogs()
    return logs.filter((log) => log.userId === userId)
  }
}

module.exports = FormLogger

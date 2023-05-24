const vscodeStatus = require('vscode-status')

const status = vscodeStatus.getStatus()

// Отображение статуса на сайте
const statusElement = document.getElementById('vscode-status')
statusElement.innerHTML = `Visual Studio Code status: ${status}`

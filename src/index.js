import { createUi } from './ui'

function component () {
  const el = document.getElementById('app')
  const contentId = 'swagger-ui'
  const ui = document.createElement('div')
  el.appendChild(ui)
  ui.setAttribute('id', contentId)
  createUi(contentId)
  return el
}


document.body.appendChild(component())
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'


const DisableAuthorizePlugin = function () {
  return {
    wrapComponents: {
      authorizeBtn: () => () => null
    }
  }
}

export const createUi = (id, url = 'swagger.json') => {
  SwaggerUI({
    url,
    dom_id: `#${id}`,
    plugins: [DisableAuthorizePlugin]
  })
}
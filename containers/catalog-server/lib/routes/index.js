const Router = require('koa-router')

function retreiveProductModel () {
  const res = {
      "id": "d78e3779-dbd6-4cbe-a501-018b6053ca6c",
      "scope": "product-models",
      "definitions": {
          "uri": {
              "type": "string"
          },
          "color": {
              "type": "string",
              "enum": [
                  "black",
                  "white",
                  "green"
              ]
          },
          "date": {
              "type": "string",
              "format": "date-time",
              "description": "The ISO 8601 date"
          }
      },
      "properties": {
          "id": {
              "$ref": "#/definitions/uri"
          },
          "name": {
              "type": "string"
          },
          "color": {
              "$ref": "#/definitions/color"
          },
          "simSlotsQty": {
              "type": "number",
              "enum": [ 1, 2 ]
          },
          "productionDate": {
              "$ref": "#/definitions/date"
          },
          "releaseDate": {
              "$ref": "#/definitions/date"
          }
      },
      "data": {
          "id": "sony-xperia-xz1",
          "name": "Sony Xperia XZ1",
          "productionDate": "2018-10-21T17:44:55+04:00",
          "releaseDate": "2018-10-21T17:44:55+04:00"
      }
  }

  return ctx => {
    ctx.body = res
  }
}

module.exports = () => {
  const router = new Router()

  router.get('/product-models/:id', retreiveProductModel())

  return router.routes()
}

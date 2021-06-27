// terse cssr
const { terseCssr } = require('./terse-cssr')

// replace __DEV__
const { replaceDefine, outDirs, srcDir } = require('../utils')

const { genWebTypes } = require('./gen-web-types')

;(async () => {
  await terseCssr()
  await replaceDefine(outDirs, {
    __DEV__: "process.env.NODE_ENV !== 'production'"
  })
  await replaceDefine([srcDir], {
    "'lodash'": "'lodash-es'"
  })

  // generate web-types.json for webstorm & vetur
  // web-types.json is only a very loose description for auto-complete
  // vscode is a much better choice
  genWebTypes()
})()

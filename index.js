// Top level file is just a mixin of submodules & constants
'use strict';

import * as deflate from "./lib/deflate.js"
import * as inflate from "./lib/inflate.js"
import * as constants from "./lib/zlib/constants.js"

export default pako = Object.assign({}, deflate, inflate, constants);

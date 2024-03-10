const { SVGElement } = require('./svg')
class Text extends SVGElement {
    constructor(props = {}, children = []) {
        super(props, children);
        this.elTag = 'text'
    }
}

module.exports = { Text };
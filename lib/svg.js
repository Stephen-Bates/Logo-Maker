const fs = require('fs')

class SVGFile {
    constructor(props = { width: 300, height: 200 }, children = []) {
        this.rootEl = new SVGElement(props, children);
    }
    saveFile(path = './') {
        const output = this.rootEl.render();

        fs.writeFile(`${path}NewLogo.svg`, output, err => {
            err
                ? console.error(err)
                : console.log(
                    `SVG successfully writen to ${path}NewLogo.svg`
                )
        });
    }
}

class SVGElement {
    constructor(props = {}, children = []) {
        this.props = { ...props };
        this.children = [...children];
        this.elTag = 'svg';
    }

    render() {
        return `<${this.elTag}${this.stringifyProps()}>${this.children.map(child => typeof child === 'string' ? child : child.render()).join('')}</${this.elTag}>`;
    }

    stringifyProps() {
        return Object.getOwnPropertyNames(this.props).map(key => ` ${key.replace('_', '-')}="${this.props[key]}"`).join('');
    }
}

module.exports = { SVGFile, SVGElement };
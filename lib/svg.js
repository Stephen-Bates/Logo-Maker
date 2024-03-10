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

module.exports = { SVGElement };
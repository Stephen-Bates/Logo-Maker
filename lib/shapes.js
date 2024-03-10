const {SVGElement} = require('./svg');

class Shape extends SVGElement {
    constructor(props = {}) {
        super(props);
    }
    setColor(color) {
        this.props.fill = color;
    }
}

class Circle extends Shape {
    constructor(props = { cx: 150, cy: 100, r: 75, fill: 'black' }) {
        super(props);
        this.elTag = 'circle';
    }
}
class Triangle extends Shape {
    constructor(props = { points: "150, 18 244, 182 56, 182", fill: 'black' }) {
        super(props);
        this.elTag = 'polygon';
    }
}
class Square extends Shape {
    constructor(props = { x: 75, y: 25, width: 150, height: 150, fill: 'black' }) {
        super(props);
        this.elTag = 'rect';
    }
}

module.exports = { Circle, Triangle, Square };
class Shape {
    constructor(color = 'black') {
        this.color = color
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return "Shapes will need to override this";
    }
}

class Circle extends Shape {
    constructor(color = 'black') {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    constructor(color = 'black') {
        super(color);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
class Square extends Shape {
    constructor(color = 'black') {
        super(color);
    }
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`
    }
}

module.exports = { Circle, Triangle, Square };
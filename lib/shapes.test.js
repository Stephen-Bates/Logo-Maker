// Import shapes for unit testing
const {Circle, Triangle, Square} = require('./shapes');

// Testing suite for shape classes
describe('Shapes', () => {
    describe('Circle', () =>{
        it("should output an XML string defining an SVG image of a blue circle", () => {
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue"></circle>')
        })
    })
    describe('Triangle', () =>{
        it("should output an XML string defining an SVG image of a blue triangle", () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"></polygon>')
        })
    })
    describe('Square', () =>{
        it("should output an XML string defining an SVG image of a blue square", () => {
            const square = new Square();
            square.setColor('blue');
            expect(square.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue"></rect>')
        })
    })
})
const { SVGElement } = require('./svg');

describe('SVG', () => {
    describe('SVGElement', () => {
        it("should render a XML string defining a SVG element with default properties", () => {
            const element = new SVGElement();
            expect(element.render()).toEqual('<svg></svg>')
        })
        it("should render a XML string defining a SVG element with properties defined at instantiation", () => {
            const props = {
                width: 300,
                height: 200
            };
            const element = new SVGElement(props);
            expect(element.render()).toEqual('<svg width="300" height="200"></svg>')
        })
        it("should render a XML string defining a SVG element with inner HTML", () => {
            const element = new SVGElement(undefined, ['Test']);
            expect(element.render()).toEqual('<svg>Test</svg>')
        })
        it("should render a XML string defining a SVG element and a child SVG element both with default properties", () => {
            const element = new SVGElement(undefined, [new SVGElement()]);
            expect(element.render()).toEqual('<svg><svg></svg></svg>')
        })
        it("should render a XML string defining a SVG element and a child SVG element with properties defined at instantiation", () => {
            const props = {
                width: 300,
                height: 200
            };
            const element = new SVGElement(props, [new SVGElement(props)]);
            expect(element.render()).toEqual('<svg width="300" height="200"><svg width="300" height="200"></svg></svg>')
        })
    })
})
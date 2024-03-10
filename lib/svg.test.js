const { SVGElement } = require('./svg');

describe('SVG', () => {
    describe('SVGElement', () => {
        it("should render a XML string defining a SVG element with default properties", () => {
            const element = new SVGElement();
            expect(element.render()).toEqual('<svg></svg>')
        })
        it("should render a XML string defining a SVG element with properties defined at instantiation", () => {
            const props = {
                width : 300,
                height : 200
            };
            const element = new SVGElement(props);
            expect(element.render()).toEqual('<svg width="300" height="200"></svg>')
        })

    })
})
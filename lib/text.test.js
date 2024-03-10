const {Text} = require('./text');

describe('Text', () => {
    describe('Text', () => {
        it("should render a XML string defining a SVG text element with default properties", () => {
            const element = new Text();
            expect(element.render()).toEqual('<text></text>')
        })
    })
})
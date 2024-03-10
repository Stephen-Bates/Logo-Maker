const { SVGElement } = require('./svg');
const { Text } = require('./text');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs');

function createNewLogo(options) {
    const { characters, text_color, shape, shape_color } = options;

    let textEl, shapeEl;

    textEl = new Text({
        x: '150',
        y: '125',
        font_size: '60',
        text_anchor: 'middle',
        fill: text_color
    }, [characters])
    switch (shape) {
        case 'circle':
            shapeEl = new Circle({
                cx: '150',
                cy: '100',
                r: '75',
                fill: shape_color
            });
            break;
        case 'triangle':
            shapeEl = new Triangle({
                points: '150, 18 244, 182 56, 182',
                fill: shape_color
            });
            break;
        case 'square':
            shapeEl = new Square({
                x: '75',
                y: '25',
                width: '150',
                height: '150',
                fill: shape_color
            });
            break;
        default:
            break;
    }
    let rootEl = new SVGElement({
        xmlns: 'http://www.w3.org/2000/svg',
        width: '300',
        height: '200'
    }, [shapeEl, textEl])
    
    const path = `${__dirname}/../renders/NewLogo.svg`;
    writeFile(path, rootEl.render(), err => {
        err
            ? console.error(err)
            : console.log(
                `SVG successfully writen to ${path}NewLogo.svg`
            )
    });
}

module.exports = { createNewLogo };
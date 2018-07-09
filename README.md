- [check requirements](https://github.com/nonlinear/tile/wiki/requirements)
- [follow installation](https://github.com/nonlinear/tile/wiki/installation)
- [visit page](https://nonlinear.github.io/tile)

## Create your own

1. install gulp dependencies with `npm install`
1. open `./svg/sketch/tile.sketch` and add more artboards
1. artboard name becomes tile name (make sure it's exportable as svg)
1. make sure color is `FF0000`
1. export svgs on `./svg/sketch/ folder
1. now that's where magic happens: run `gulp clean && gulp svg && gulp svg2 && gulp replace && gulp make`, it will convert all svgs into an SCSS an file, with mixin included.
1. test your new pattern with `+tile(artboard-name, red, 10)`
1. do you have cool patterns to share? consider [emailing me your sketch file](mailto:info@nicholasfrota.com) so I can update with attribution
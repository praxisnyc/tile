- [check requirements](https://github.com/nonlinear/tile/wiki/requirements)
- [follow installation](https://github.com/nonlinear/tile/wiki/installation)
- [visit page](https://nonlinear.github.io/tile)

## Create your own

1. install gulp dependencies with `npm install`
1. open `sketch/tile.sketch`, add more artboards
1. artboard name becomes tile name (make sure it's exportable as svg)
1. ensure color is `FF0000`
1. export on sketch folder
1. run `gulp clean; gulp svg; gulp svg2; gulp replace; gulp make; sass-convert -F scss -T sass tile.scss tile.sass`
1. test your new pattern with `+tile(artboard-name, red, 10)`
1. do you have cool patterns to share? consider [emailing me your sketch file](mailto:info@nicholasfrota.com) so I can update with attribution
var postcss = require('postcss');
var cssvariables = require('postcss-css-variables');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var fs = require('fs');

var css = "";
css += fs.readFileSync('source/normalize.css', 'utf8');
css += fs.readFileSync('source/grid.css', 'utf8');
css += fs.readFileSync('source/menu.css', 'utf8');
css += fs.readFileSync('source/style.css', 'utf8');

var output = postcss([
    cssvariables({variables: {}}),
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano()
]).process(css, {
    from: 'framework.css',
    to: 'framework.pkgd.css',
    map: { inline: false }
}).then(function (result) {
    fs.writeFileSync('dist/framework.pkgd.css', result.css);
    fs.writeFileSync('dist/framework.pkgd.css.map', result.map);
});

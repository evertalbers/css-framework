var postcss = require('postcss');
var cssvariables = require('postcss-css-variables');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var fs = require('fs');

var css = fs.readFileSync('framework.css', 'utf8');

var output = postcss([
    cssvariables({variables: {}}),
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano()
]).process(css, {
    from: 'framework.css',
    to: 'framework.pkgd.css',
    map: { inline: false }
}).then(function (result) {
    fs.writeFileSync('framework.pkgd.css', result.css);
    fs.writeFileSync('framework.pkgd.css.map', result.map);
});

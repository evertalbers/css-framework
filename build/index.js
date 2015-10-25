var postcss = require('postcss');
var cssvariables = require('postcss-css-variables');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

var css = ":root { --width: 100px; }  @media (max-width: 1000px) { :root { --width: 200px; } }  .box { width: var(--width); }";

function compileCSS(css){
    var output = {}
    postcss([
        cssvariables({variables: {}}),
        autoprefixer({ browsers: ['last 2 versions'] }),
        csswring()
    ]).process(css, {
        from: 'framework.css',
        to: 'framework.pkgd.css',
        map: { inline: false }
    }).then(function (result) {
        output.css = result.css;
        output.map = result.map.toString();
    });
}

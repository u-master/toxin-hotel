const path = require('path');

module.exports = function() {
    const sourceDir = path.join(__dirname, '..');
    return {
        source: function(file="") { return path.join(sourceDir, '/', file) },
        sourcePug: function(file="") { return path.join(sourceDir, 'pages/', file) },
        sourceJS: function(file="") { return path.join(sourceDir, 'js/', file) },
        build: function(file="") { return path.join(sourceDir, '../', file) }
    }
};
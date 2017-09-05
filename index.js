/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var FastbootTransform = require('fastboot-transform');

module.exports = {

    name: 'ember-typewriter',

    included: function(app) {

        this._super.included.apply(this, arguments);

        app.import(this.treePaths.vendor + '/typed.js/typed.min.js');

    },

    treeForVendor: function(vendorTree) {

        var trees = [];

        var typedTree = FastbootTransform(new Funnel(path.join(path.dirname(require.resolve('typed.js'))), {
            destDir: 'typed.js',
            files: ['typed.min.js']
        }));

        if ( vendorTree !== undefined ) { trees.push(vendorTree); }
        trees.push(typedTree);

        return new MergeTrees(trees);

    },

    isDevelopingAddon: function() {
        return true;
    }

};

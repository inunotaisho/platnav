const webpack = require('webpack'),
            _ = require('lodash'),
         path = require('path');

loadConfig = (path, config, webpack) =>{
    let glob = require('glob'),
        obj = {},
        key;

        if(path[path.length -1] !== '/'){
            path += '/';
        }

        glob.sync('*', {cwd: path}).forEach(option =>{
            key = option.replace(/\.js$/,'');
            obj[key] = require(path + option)(config, webpack);
        });

        return obj;
};

let config = {
    license: 'license.txt',
    version: '<%= pkg.version %>',
    name: 'platnav',
    folders: {
        src: 'src/',
        examples: 'examples/',
        test: 'test/',
        dist: 'dist/'
    },
    build:{
        dest:{
            ts: 'dist/platnav.ts',
            tslocal: 'dist/platnav-local.ts',
            dts: 'dist/platnav.d.ts',
            dtslocal: 'dist/platnav-local.d.ts',
            js: 'dist/platnav.js',
            jslocal: 'dist/platnav-local.js',
            min: 'dist/platnav.min.js',
            minlocal: 'dist/platnav-local.min.js',
            less: 'dist/platnav.less',
            css: 'dist/platnav.css',
            mincss: 'dist/platnav.min.css'
        }
    },
}
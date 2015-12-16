var gulp = require('gulp');

var PATHS = {
    src: 'src/**/*.ts',
    lib: [
        'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/angular2/node_modules/rx/dist/rx.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/zone.js/dist/long-stack-trace-zone.js',
        '!node_modules/systemjs/dist/*.src.js',
        'node_modules/systemjs/dist/*.js'
    ],
    dist: 'dist',
    distLib: 'dist/lib',
};

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('libs',function() {
    return gulp
        .src(PATHS.lib)
        .pipe(gulp.dest(PATHS.distLib));
});

gulp.task('angular2', function() {
    return gulp
        .src([
            '!node_modules/angular2/es6/**',
            '!node_modules/angular2/node_modules/**',
            '!node_modules/angular2/angular2.api.js',
            '!node_modules/angular2/angular2_sfx.js',
            '!node_modules/angular2/angular2.api.js',
            '!node_modules/angular2/ts/**',
            'node_modules/angular2/**/*.js'
        ])
        .pipe(gulp.dest(PATHS.dist + '/lib/angular2'));
});

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
    var tscConfig = require('./tsconfig.json');
 
    var tsResult = gulp
        .src(PATHS.src)
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('play', ['angular2','libs','ts2js'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000, app;

    gulp.watch(PATHS.src, ['ts2js']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['play']);

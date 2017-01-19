var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var Builder = require('systemjs-builder');

var bundleConfig = {
    baseURL: './',
    map: {
        "jquery": "./node_modules/jquery/dist/jquery.min.js",
        "bootstrap": "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "css": "./node_modules/systemjs-plugin-css/css.js",
        "bootstrap-css": "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "estilos-css": "./app/css"
    },
    packages: {
        "./": {
            defaultExtension: "js"
        }
    },
    meta: {
        "*.css": { loader: "css" }
    }
};

gulp.task('bundle:tareas', function (callback) {
    var builder = new Builder(bundleConfig);

    builder.bundle('./app/main.js - ./app/vendor.js', './js/dist/bundle-tareas.js', {
        minify: true,
        sourceMaps: true
    })
        .then(function () { callback(); })
        .catch(function (err) { callback(err); });
});

gulp.task('bundle:vendor', function (callback) {
    var builder = new Builder(bundleConfig);

    var bundleVendor = builder.bundle('./app/vendor.js', './js/dist/bundle-vendor.js', {
        minify: false,
        sourceMaps: false
    });

    bundleVendor
        .then(function () { callback(); })
        .catch(function (err) { callback(err); });
});

// var rename = require("gulp-rename");
// var seq = require("run-sequence");
// var del = require("del");

gulp.task("all", function () {
    return gulp.src(["./node_modules/core-js/client/shim.min.js", "./node_modules/systemjs/dist/system.js"])
        .pipe(concat("polyfill-bundle.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./js/dist/"));
});

// gulp.task("concat", function() {
//     return gulp.src(["./node_modules/core-js/client/shim.min.js", "./node_modules/systemjs/dist/system.js"])
//         .pipe(concat("polyfill-bundle.js"))
//         //.pipe(uglify())
//         .pipe(gulp.dest("./js/"));
// });

// gulp.task("compress", function() {
//     return gulp.src("./js/*.js")
//         .pipe(uglify())
//         .pipe(gulp.dest("./js/"));
// });

// gulp.task("rename", function() {
//     return gulp.src("./js/*.js")
//         .pipe(rename(function(path) {
//             // path.basename = path.basename.replace(".min", "");
//             path.basename += ".min";
//         }))
//         .pipe(gulp.dest("./js/dist/"));
// });

// gulp.task('clean', function() {
//     return del(['js/*.js'])
// });

// gulp.task("sequence", function(callback) {
//     seq("concat", "compress", "rename", "clean", callback);
// });

// gulp.task("default", ["sequence"]);
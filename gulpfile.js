var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
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
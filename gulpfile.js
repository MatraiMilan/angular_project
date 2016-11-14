var gulp = require('gulp');

gulp.task('copy-libs', function () {
    gulp.src('node_modules/angular/angular.min.js').pipe(gulp.dest('www/lib'));
} )

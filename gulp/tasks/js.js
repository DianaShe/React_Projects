import terser from 'gulp-terser'; // мініфікація JS
import rename from 'gulp-rename';

export const js = () => {
    return app.gulp.src(app.path.src.js)
    .pipe(terser())
    .pipe(rename({
                extname: '.min.js'
            }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
}
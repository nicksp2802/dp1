var gulp = require("gulp");
var less = require("gulp-less");
var nano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var autoprefixer = require("gulp-autoprefixer");
var sync = require("browser-sync").create();

var isDevelopment = true;

gulp.task("js:own", function () {
   return gulp.src(["src/js/main.js",
       "src/js/blogtexts.js",
       "src/js/blog.js"
   ])
       .pipe(gulpIf(isDevelopment,sourcemaps.init()))
       .pipe(uglify())
       .pipe(gulpIf(isDevelopment,sourcemaps.write()))
       .pipe(gulp.dest("dist/js"));
});
/*
gulp.task("js:own1", function () {
    return gulp.src("src/js/blog.js")
        .pipe(gulpIf(isDevelopment,sourcemaps.init()))
        .pipe(uglify())
        .pipe(gulpIf(isDevelopment,sourcemaps.write()))
        .pipe(gulp.dest("dist/js"));
});

*/

gulp.task("js:vendor", function () {
   return gulp.src([
       "node_modules/jquery/dist/jquery.js",
       "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js",
       "node_modules/bootstrap/dist/js/bootstrap.js",
       "node_modules/toastr/build/toastr.min.js",
       "src/js/jquery.bxslider.js"
       ])
       .pipe(concat("vendor.js"))
       .pipe(gulpIf(!isDevelopment,uglify()))
       .pipe(gulp.dest("dist/js"));
});

gulp.task("css:own", function () {
   return gulp.src("src/css/main.less")
       .pipe(gulpIf(isDevelopment,sourcemaps.init()))
       .pipe(less())
       .pipe(autoprefixer("last 2 versions"))
       .pipe(nano())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest("dist/css"))
       .pipe(sync.stream());
});

gulp.task("css:vendor", function () {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/toastr/build/toastr.min.css",
        "src/css/jquery.bxslider.css"
        ])
        .pipe(gulpIf(!isDevelopment,nano()))
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("html", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("images", function () {
    return gulp.src("src/images/*.*")
        .pipe(gulp.dest("dist/images"));
});

gulp.task("bxslider_images", function () {
    return gulp.src("src/css/images/*.*")
        .pipe(gulp.dest("dist/css/images"));
});

gulp.task("bxslider_thumbnails", function () {
    return gulp.src("src/images/thumbnails/*.*")
        .pipe(gulp.dest("dist/images/thumbnails"));
});

gulp.task("fonts", function () {
    return gulp.src("src/fonts/*.*")
        .pipe(gulp.dest("dist/fonts"));
});


gulp.task("css", ["css:own", "css:vendor"]);
gulp.task("js", ["js:own",/*"js:own1",*/ "js:vendor"]);
gulp.task("watch", function () {
    sync.init({
        server:"dist"
    });
    gulp.watch("src/css/**/*.less", ["css:own"]);
    gulp.watch("src/js/*.js", ["js:own"]);
    gulp.watch("dist/js/*.js").on("change", sync.reload);
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("dist/*.html").on("change", sync.reload);
});

gulp.task("build", ["html", "css", "js", "images","bxslider_images","bxslider_thumbnails","fonts"]);
gulp.task("default", ["build", "watch"]);
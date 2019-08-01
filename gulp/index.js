const fs = require("fs");
const tasks = fs.readdirSync("./gulp/tasks/");
const gulp = require("gulp");

tasks.forEach(function(task) {
  require("./tasks/" + tasks);
});

// Gulp default
gulp.task("default", ["browserSync", "scripts", "styles", "nunjucks", "watch"]);

// 'watch', 'clean', 'icons', 'fonts', 'styles:dev', 'polyfills:dev', 'data:dev', 'flowpaper:dev', 'images:dev', 'media:dev', 'views:dev', 'scripts:dev'

// gulp.task('production', ['clean', 'icons', 'fonts', 'styles:production', 'polyfills:production', 'images:production', 'media:production', 'scripts:production', 'flowpaper:production']);

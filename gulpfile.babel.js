/**
 * gulp配置文件
 */

// gulp核心包
const gulp = require('gulp');
// html压缩
const htmlmin = require('gulp-htmlmin');
// css压缩，二选一
const cssnano = require('gulp-cssnano');
const cssmin = require('gulp-minify-css');
// 编译less
const less = require('gulp-less');
// 编译sass
const sass = require('gulp-sass');
// js压缩包
const uglify = require('gulp-uglify');
// js，css合并
const concat = require('gulp-concat');
// 压缩图片
const imagemin = require('gulp-imagemin');
// 重命名
const rename = require('gulp-rename');
// 删除文件夹
const clean = require('gulp-clean');
// css添加前缀
const autoprefix = require('gulp-autoprefixer');
// es6
const babel = require('gulp-babel');

// 前缀配置参数
const prefixOptions = {
    browsers: ['last 20 versions', '>1%', 'Firefox <= 20', 'ie 6', 'Opera <= 20'],
    cascade: true, //是否美化属性值 默认：true 像这样：
    //-webkit-transform: rotate(45deg);
    //        transform: rotate(45deg);
    remove: false //是否去掉不必要的前缀 默认：true
};

// css压缩配置
const cssminOptions = {
    advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
    compatibility: 'ie7', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
    keepBreaks: false, //类型：Boolean 默认：false [是否保留换行]
    keepSpecialComments: '*'
    //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
};

// 测试
gulp.task('test', () => {
    console.log(123);
});

// 处理html
gulp.task('html', () => {
    return gulp.src(['src/index.html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
    gulp.src(['src/views/*.html','src/views/**/*.html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/views'));
});

// 处理css
gulp.task('css', () => {
    return gulp.src(['src/style/*.css','src/style/**/*.css'])
        .pipe(autoprefix(prefixOptions))
        .pipe(cssmin(cssminOptions))
        .pipe(gulp.dest('dist/style'));
});

// 处理less
gulp.task('less', () => {
    return gulp.src(['src/style/*.less','src/style/**/*.less'])
        .pipe(less())
        .pipe(autoprefix(prefixOptions))
        .pipe(cssmin(cssminOptions))
        .pipe(gulp.dest('dist/style'));
});

// 处理scss
gulp.task('scss', () => {
    return gulp.src(['src/style/*.scss','src/style/**/*.scss'])
        .pipe(sass())
        .pipe(autoprefix(prefixOptions))
        .pipe(cssmin(cssminOptions))
        .pipe(gulp.dest('dist/style'));
});

// 处理js
gulp.task('js', () => {
    return gulp.src(['src/js/*.js','src/js/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// 处理图片
gulp.task('img', () => {
    return gulp.src(['src/images/*', 'src/images/**/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// 第三方库
gulp.task('lib', function(){
    return gulp.src(['src/lib/*','src/lib/**/*'])
    .pipe(gulp.dest('dist/lib'));
});

// 删除文件夹
gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

// 任务序列，执行多个任务(需要配置一个异步，加个回调，不然会边编译边删除)
gulp.task('build', ['clean'], function() {
    return gulp.start('html', 'css', 'less', 'scss','js','img');
});
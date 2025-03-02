import { series, parallel, src, dest } from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

// 编译 SCSS 文件
function compile() {
  return src('./src/styles/**/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest('./dist/styles'))
}

// 复制 CSS 变量文件（用于主题定制）
function copyCssVars() {
  return src('./src/styles/common/_variables.scss')
    .pipe(rename('theme-vars.scss'))
    .pipe(dest('./dist/styles'))
}

export default series(parallel(compile, copyCssVars)) 
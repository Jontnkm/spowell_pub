const { src, dest, series, parallel, watch } = require('gulp');
const ejs = require('gulp-ejs');        //ejs
const scss = require('gulp-sass')(require('sass'));      //scss
const concat = require('gulp-concat');          //파일 병합 시 사용
const sourcemaps = require('gulp-sourcemaps')   //소스맵 scss에 필요

const rename = require('gulp-rename');  //이름바꾸기
const clean = require('gulp-clean');    //파일 및 폴더 삭제

const browserSync = require('browser-sync').create(); //로컬 서버
const reloader = browserSync.reload("*.html");

//dist 폴더 삭제
function clear(cb) {
    console.log("dist 폴더를 삭제 합니다.");
    return src('./project/dist/')
        .pipe(clean());
    cb();
}

//common 폴더 복사
function commonCopy(cb){
    console.log("common 파일을 복사합니다.");
    return src(['./project/src/common/**/*','!project/src/common/scss/'])
        .pipe(dest('./project/dist/common'));
    cb();
}

//image 폴더 복사
function imageCopy(cb){
    console.log("image 파일을 복사합니다.");
    return src(['./project/src/common/images/**/*'])
        .pipe(dest('./project/dist/common/images'));
    cb();
}

//guide 파일 복사//guide 폴더 복사
function guideCopy(cb){
    console.log("guide 파일을 복사합니다.");
    return src(['./project/src/guide/**/*'])
        .pipe(dest('./project/dist/guide'));
    cb();
}

//ejs를 html로 변환
function compileEjs(cb){
    console.log("ejs compile");
    return src(['./project/src/html/*.html', './project/src/html/**/*.html'])
        .pipe(ejs())
        .pipe(dest('./project/dist/html'));
    cb();
}




//scss 적용
var scssOptions = {
    //outputStyle : "compressed",   //css컴파일 결과 코드스타일 지정
    indentType : "tab",         //컴파일 된 css 들여스기 타입
    indentWidth : 1,            //css들여쓰기 갯수 (outputStyle: nested, expanded)
    precision: 6,               //컴파일 된 css의 소수점 자리수
    sourceComments: true        //컴파일된 css에 원본소스 위치와 줄수 주석표시
}

//css 적용
function compileCss(cb){
    console.log("css 적용");
    return src('./project/src/common/css/**/*')
        .pipe(dest('./project/dist/common/css'));
    cb();
}

//scss 적용
function compileScss(cb){
    console.log("scss compile");
    return src('./project/src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(scss(scssOptions).on('error',scss.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./project/dist/common/css'));
    cb();
}

//js 적용
function compileJs(cb){
    console.log("js compile");
    return src('./project/src/common/js/**/*')
        .pipe(dest('./project/dist/common/js'));
    cb();
}

//실시간 감지 (ejs, css, js)
function watcher(cb){
    console.log("와처가 실행중");
    watch('./project/src/html/**/*', parallel(compileEjs));
    watch('./project/src/common/css/**/*', parallel(compileCss));
    watch('./project/src/scss/**/*', parallel(compileScss));
    watch('./project/src/common/js/**/*', parallel(compileJs));
    watch('./project/src/common/images/**/*', parallel(imageCopy));
    //watch('./project/src/images/**/*', parallel(imageCopy));
    watch('./project/src/guide/**/*', parallel(guideCopy));
}

//로컬서버 (감시 :html, ejs)
function browser(cb){
    browserSync.init({
        server: {
            baseDir:'./project/dist',
            directory: true,
        },
        startPath: "/guide/filelist_spowell.html",
    });
    watch('./project/dist/**/*.html').on('change',function(){
        console.log("html이 변했습니다");
        browserSync.reload('./project/dist/**/*.html');
    });
}

exports.reset =  series(clear, guideCopy, commonCopy, compileCss, compileScss, compileEjs); //내부 파일을 임의로 추가,삭제,변경시 실행
exports.build = series(guideCopy, commonCopy, compileCss, compileScss, compileEjs);         //변경사항 적용
exports.default = series(exports.build, parallel(watcher, browser));                        //로컬서버

var webserver = require('gulp-webserver'),
    gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat');
var data = [
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    },
    {
        'img': '../images/11_03.gif',
        'name': '掌上银行'
    }
]
gulp.task("minifyCss",function(){
    gulp.src('./css/*.css')
    .pipe(concat("bundle.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest("./css"))  
});

gulp.task("user", function () {
    gulp.src("./")
        .pipe(webserver({
            host: "localhost",
            port: 8090,
            open: true,
            fallback: "index.html",
            livereload: true
        }));
});
gulp.task('webserver',function(){
    gulp.src('./')
    .pipe(webserver({
        host:'localhost',
        port:8000,
        middleware:function(req,res){
           if(req.url === "/"){
                res.writeHead(200, {
                    "Content-type": "text/json;charset=utf8",
                    "Access-Control-Allow-Origin": "*"
                });
                console.log(typeof data);
                res.end(JSON.stringify(data));
           }
        }
    }));
})
gulp.task("default", function () {
    gulp.start("user","webserver")
});
# gulp-config
gulp配置模板

### babel-polyfill

Babel默认只转换新的js句法，而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（如Object.assign）都不会转码。
例：ES6在Array对象上新增了Array.from方法。Babel就不会对其转码。必须使用babel-polyfill，为当前环境提供一个垫片。在入口文件或需要使用API的文件头部import或require
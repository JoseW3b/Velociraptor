declare var SystemJS: any;
SystemJS.config({
    defaultJSExtensions: false,
    map: {
        "jquery": "./node_modules/jquery/dist/jquery.min.js",
        "bootstrap": "./node_modules/bootstrap/dist",
        "css": "./node_modules/systemjs-plugin-css/css.js",
        "estilos-css": "./app/css"
    },
    packages: {
        "./": {
            defaultExtension: "js"
        },
        "bootstrap": {
            main: "js/bootstrap.min"
        }
    },
    meta: {
        "*.css": { loader: "css" }
    }
});

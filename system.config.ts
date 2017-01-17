declare var SystemJS: any;
SystemJS.config({
    defaultJSExtensions: false,
    map: {
        "jquery": "./node_modules/jquery/dist/jquery.min.js",
        "bootstrap": "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "css": "./node_modules/systemjs-plugin-css/css.js",
        "bootstrap-css": "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "estilos-css": "./app/css"
    },
    packages: {
        "./": {
            defaultExtension: "js"
        }
    },
    meta: {
        "*.css": { loader: "css" }
    }
});

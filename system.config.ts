declare var SystemJS: any;
SystemJS.config({
    bundles: {
        "./js/dist/bundle-tareas": [
            "./app/main.js",
            "app-tareas/tareas.js",
            "app-tareas/tareasService.js",
            "app-tareas/objetoTarea.js",
            "app-libreria/log.js"
        ],
        "./js/dist/bundle-vendor": [
            "./app/vendor.js", "jquery", "bootstrap", "bootstrap-css"
        ]
    },
    map: {
        "jquery": "./node_modules/jquery/dist/jquery.min.js",
        "bootstrap": "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "css": "./node_modules/systemjs-plugin-css/css.js",
        "bootstrap-css": "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "estilos-css": "./app/css",
        "app-tareas": "./app/tareas",
        "app-liberia": "./app/libreria"
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

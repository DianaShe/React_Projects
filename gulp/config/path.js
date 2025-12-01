// ------------- Отримаємо ім'я нашого проєкта -------

import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';  // готовий код, оброблений
const srcFolder = './src';     // ісходний код робочий

export const path = {
    build: {
        html: `${buildFolder}/`,                // ./dist/
        css: `${buildFolder}/css/`,             //  ./dist/css/
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`,      // ./dist/files
    },
    src: {
        html: `${srcFolder}/*.html`, 
        scss: `${srcFolder}/scss/main.scss`,               // ./src/scss/main.scss
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,png,jpeg,webp,svg}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,png,jpeg,webp,svg}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}
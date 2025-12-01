// ------------------- Інструкція послідовного створення тасків----------
// 1. Встановити плагін (який нам потрібен) 
// 2. Створюємо таску (Ім'я таски повинно вказувати на те що ми там робимо)
// 3. Імпортувати в gulpfile нову таску
// 4. Додати до watcher, якщо це потрібно
// 5. Додати в сценарій виконання


// Імпортування основного модуля -------------
import gulp from 'gulp';


// Імпортування допоміжних модулів ---------------
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

// -- Імпортування тасок -------------
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { serverTask } from './gulp/tasks/server.js'

// -- Передача даних в глобальний об'єкт -------------
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

//  Watcher - слідкує за змінами в файлах -------------
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.js, serverTask);
}

// Сценарій виконання тасок ---------------------
const mainTasks = gulp.parallel(html, scss, js, serverTask, watcher);


gulp.task('default', mainTasks);
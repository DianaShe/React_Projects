import browserSync from 'browser-sync';

const server = browserSync.create();

export const serverTask = () => {
    server.init({
        server: {
            baseDir: './dist'
        },
        notify: false,
        port: 3000,
    })
}
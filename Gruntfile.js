module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    //base: 'build',
                    open: true,
                    livereload: true
                }
            }
        },
        watch: {
            sources: {
                files: ['index.html', 'assets/**/*', 'app/*', 'app/common/**/*', 'app/core/*', 'app/core/**/*'],
                tasks: ['follow'],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('follow', [
        'connect',
        'watch'
    ]);

    grunt.registerTask('default', [
        'follow'
    ]);
};

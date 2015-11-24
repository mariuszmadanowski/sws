module.exports = function(grunt) {

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
                files: [
                    'index.html',
                    'assets/**/*',
                    'app/*',
                    'app/common/**/*',
                    'app/core/*',
                    'app/core/**/*'
                ],
                tasks: ['follow'],
                options: {
                    livereload: true
                }
            }
        },
        jasmine: {
            pivotal: {
                src: [
                    'app/*.js',
                    'app/common/**/*.js',
                    'app/core/*.js',
                    'app/core/**/*.js'
                ],
                options: {
                    specs: 'spec/*[sS]pec.js',
                    vendor: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-route/angular-route.js',
                        'node_modules/angular-module-animate/angular-animate.js',
                        'node_modules/angular-mocks/angular-mocks.js'
                    ]
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

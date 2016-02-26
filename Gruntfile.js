module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: '*',
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
                    'data/*',
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
                    specs: [
                        //'spec/*[sS]pec.js',
                        //'spec/**/*[sS]pec.js',
                        //'spec/**/**/*[sS]pec.js'
                        'spec/common/services/sites.factory.spec.js'
                    ],
                    vendor: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-route/angular-route.js',
                        'node_modules/angular-module-animate/angular-animate.js',
                        'node_modules/angular-mocks/angular-mocks.js'
                    ]
                }
            }
        },
        jshint: {
            options: {
                //esversion: 5,
                strict: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            },
            files: {
                src: [
                    'Gruntfile.js',
                    'app/*.js',
                    'app/common/**/*.js',
                    'app/core/*.js',
                    'app/core/**/*.js',
                    'spec/*.js',
                    'spec/common/**/*.js',
                    'spec/core/*.js',
                    'spec/core/**/*.js'
                ]
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

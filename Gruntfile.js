module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        sass: {
            production: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/main.css': '_scss/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    '_scss/*.scss',
                    '_scss/modules/*.scss',
                    '../scaffolding/shoptet.scss',
                    '../scaffolding/shoptet/*.scss'
                ],
                tasks: ['sass:production'],
                options: {
                    livereload: 35729
                }
            },
            js: {
                files: [
                    '_js/*.js'
                ],
                tasks: ['uglify:production'],
                options: {
                    livereload: 35729
                }
            }
        },
        uglify: {
            production: {
                options: {
                    mangle: false,
                    compress: true
                },
                files: {
                    'dist/js/build.js': pkg.jsFiles
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['uglify-js', 'compile-css']);
    grunt.registerTask('uglify-js', ['uglify:production']);
    grunt.registerTask('compile-css', ['sass:production']);

};

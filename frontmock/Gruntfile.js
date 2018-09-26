module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes
    watch: {
      files: ['raw/*', 'raw/include/*', 'raw/scss/*', 'raw/js/*', 'raw/img/*'],
      tasks: ['build'],
    },

    // Remove built directory
    clean: {
      build: ['compiled/']
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'raw/scss',
          src: ['*.scss'],
          dest: 'compiled/css',
          ext: '.css'
        }]
      }
    },

    // Build the site using grunt-includes
    includes: {
      build: {
        cwd: 'raw',
        src: ['*.html'],
        dest: 'compiled/',
        options: {
          flatten: true,
          includePath: 'raw/include',
        }
      }
    },

    // Copy remaining files
    copy: {
      css: {
        expand: true,
        cwd: 'raw/scss',
        src: ['*.css'],
        dest: 'compiled/css/'
      },
      js: {
        expand: true,
        cwd: 'raw/js',
        src: ['*.js'],
        dest: 'compiled/js/'
      },
      img: {
        expand: true,
        cwd: 'raw/img',
        src: ['*.jpg', '*.png'],
        dest: 'compiled/img/'
      }
    }
  });

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task definitions
  grunt.registerTask('build', ['clean', 'sass', 'includes', 'copy']);
  grunt.registerTask('default', ['build', 'watch']);
};

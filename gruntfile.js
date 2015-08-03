module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify : {
			my_target : {
				files : {
					'assets/scripts/script.js': ['assets/_/scripts/script.js'] 
				} //files
			} //my_target 
		}, //uglify
		compass : {
			dev : {
				options : {
					config : 'config.rb'
				} //options
			} //dev
		},
		watch : {
			options : { livereload : true },
			html : {
				files : ['**/*.html'],
			},
			script : {
				files : ['assets/_/scripts/*.js'], 
				tasks : ['uglify']
			},
			sass : {
				files : ['assets/_/sass/*.scss'],
				tasks : ['compass:dev']
			}
		} //watch 
	}) //initConfig
}//exports
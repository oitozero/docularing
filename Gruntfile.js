module.exports = function(grunt) {

    grunt.initConfig({

        // Docular configuration
        docular: {        
            groups: [ 
                {
                    groupId: 'group_1',
                    groupTitle: 'Group 1',
                    groupIcon: 'icon-book', 
                    showSource: false,
                    sections: [
                        {
                            id: 'section_1',
                            title: 'Section 1',
                            showSource: false,
                            scripts: [
                                'lib/index.js'
                            ],
                            docs: [
                                'doc/lib.doc'
                            ]
                        }
                    ]
                }
            ],
            docular_webapp_target: 'docs',
            docular_partial_home: 'templates/docular/home.html',
            docular_partial_footer: 'templates/docular/footer.html',
            docular_partial_navigation: 'templates/docular/navigation.html'
        }

    });

    // Load the plugin that provides the "docular" tasks.
    grunt.loadNpmTasks('grunt-docular');

    // Run grunt docularing to generate documentation
    grunt.registerTask('docs', ['docular']);

};
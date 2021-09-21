const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {
        return this.prompt([
            {
                type:'input',
                name:'name',
                message:'Your project name',
                default:this.appname
            }
        ]).then(answer => {
            this.answers = answer
        })
    }

    writing () {
        const templates = [
            '.editorconfig',
            '.gitignore',
            '.npmrc',
            '.travis.yml',
            'LICENSE',
            'package.json',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'src/assets/fonts',
            'src/assets/images',
            'src/assets/scripts',
            'src/assets/styles',
            'src/layouts/basic.html',
            'src/partials/footer.html',
            'src/partials/header.html',
            'src/about.html',
            'src/index.html'
        ]

        templates.forEach(item =>{
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
        
    }
}
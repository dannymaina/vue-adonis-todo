'use strict'

const Project = use('App/Models/Project')

class ProjectController {
    async index({auth}){
        const user = await auth.getUser()
        const projects = user.projects().fetch()
        return projects
    }

    async create({request, auth}){
        const user = await auth.getUser()
        const {title} = request.all()
        const project = new Project()
        project.fill({
            title
        })
        await user.projects().save(project)
        return project
    }
}

module.exports = ProjectController

'use strict'

const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('description', 255)
      table.boolean('completed').defaultTo(false)
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema

const db = require('../dbConnection')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes')
}

function findById(id) {
  return db('schemes').select('*').where({
    id
  })
}

function findSteps(id) {
  return db('steps').select('*').where({
    id
  })
}

function add(scheme) {
  return db('schemes').insert(scheme)
}

function update(changes, id) {
  return db('schemes').update(changes).where({
    id
  })
}

function remove(id) {
  return db('schemes').select('*').where({
    id
  }).del()
}
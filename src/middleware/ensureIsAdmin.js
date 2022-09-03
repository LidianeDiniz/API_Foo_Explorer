const knex = require('../database/knex');
const AppError = require('../utils/AppError');

async function ensureIsAdmin(request, response, next) {
  const { id } = request.user;

  const user = await knex('users').where({ id });

  const isAdmin = user[0].is_admin;

  if (isAdmin === 0) {
    throw new AppError('Acesso permito somente à administradores !', 401);
  }

  return next();
}

module.exports = ensureIsAdmin;

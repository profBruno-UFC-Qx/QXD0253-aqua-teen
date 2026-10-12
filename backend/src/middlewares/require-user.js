'use strict';
module.exports = () => async (ctx, next) => {
  const authorization = ctx.get('authorization');
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : null;
  if (!token) return ctx.unauthorized('Sessão obrigatória.');
  try {
    const payload = await strapi.plugin('users-permissions').service('jwt').verify(token);
    const user = await strapi.plugin('users-permissions').service('user').fetchAuthenticatedUser(payload.id);
    if (!user || user.blocked) return ctx.unauthorized('Sessão inválida.');
    ctx.state.user = user;
    return next();
  } catch { return ctx.unauthorized('Sessão inválida ou expirada.'); }
};

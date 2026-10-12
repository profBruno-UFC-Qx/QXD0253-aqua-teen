'use strict';

const present = (user, merchant) => ({
  id: user.id,
  fullName: user.fullName,
  email: user.email,
  city: user.city || null,
  accountType: user.accountType,
  avatar: user.avatar || null,
  merchant: merchant || null,
});

module.exports = {
  async me(ctx) {
    const user = await strapi.db.query('plugin::users-permissions.user').findOne({
      where: { id: ctx.state.user.id }, populate: ['avatar'],
    });
    const merchant = user.accountType === 'merchant'
      ? await strapi.db.query('api::merchant.merchant').findOne({ where: { owner: { id: user.id } } })
      : null;
    ctx.body = present(user, merchant);
  },
  async update(ctx) {
    const { fullName, city, avatar } = ctx.request.body?.data || {};
    if (!fullName || !String(fullName).trim()) return ctx.badRequest('Nome completo obrigatório.');
    await strapi.db.query('plugin::users-permissions.user').update({
      where: { id: ctx.state.user.id },
      data: { fullName: String(fullName).trim(), city: city ? String(city).trim() : null, ...(avatar !== undefined ? { avatar } : {}) },
    });
    const user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { id: ctx.state.user.id }, populate: ['avatar'] });
    const merchant = user.accountType === 'merchant'
      ? await strapi.db.query('api::merchant.merchant').findOne({ where: { owner: { id: user.id } } })
      : null;
    ctx.body = present(user, merchant);
  },
};

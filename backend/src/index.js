'use strict';
module.exports = {
  register() {},
  async bootstrap({ strapi }) {
    const categories = [
      ['Frutas e hortaliças', 'frutas-e-hortalicas'], ['Roupas e acessórios', 'roupas-e-acessorios'],
      ['Alimentos preparados', 'alimentos-preparados'], ['Bebidas', 'bebidas'], ['Artesanato', 'artesanato']
    ];
    for (const [name, slug] of categories) {
      const exists = await strapi.documents('api::category.category').findFirst({ filters: { slug } });
      if (!exists) await strapi.documents('api::category.category').create({ data: { name, slug } });
    }
    const role = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'authenticated' } });
    if (!role) return;
    let permission = await strapi.db.query('plugin::users-permissions.permission').findOne({ where: { action: 'plugin::upload.content-api.upload' } });
    if (!permission) permission = await strapi.db.query('plugin::users-permissions.permission').create({ data: { action: 'plugin::upload.content-api.upload' } });
    await strapi.db.query('plugin::users-permissions.role').update({ where: { id: role.id }, data: { permissions: { connect: [permission.id] } } });
  }
};

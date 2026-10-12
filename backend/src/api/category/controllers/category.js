module.exports = { async find(ctx) { ctx.body = await strapi.documents('api::category.category').findMany({ sort: { name: 'asc' } }); } };

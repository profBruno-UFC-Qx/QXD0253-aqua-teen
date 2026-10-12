module.exports = async (policyContext) => {
  const userId = policyContext.state.user?.id;
  if (!userId) return false;
  const user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { id: userId }, select: ['accountType'] });
  return user?.accountType === 'merchant';
};

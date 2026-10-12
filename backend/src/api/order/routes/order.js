module.exports = { routes: [
 { method:'POST', path:'/orders/checkout', handler:'order.checkout', config:{ auth:false, middlewares:['global::require-user'] } }, { method:'GET', path:'/orders/me', handler:'order.consumerOrders', config:{ auth:false, middlewares:['global::require-user'] } },
 { method:'GET', path:'/orders/merchant', handler:'order.merchantOrders', config:{ auth:false, middlewares:['global::require-user'] } }, { method:'PATCH', path:'/orders/:documentId/status', handler:'order.changeStatus', config:{ auth:false, middlewares:['global::require-user'] } }
] };

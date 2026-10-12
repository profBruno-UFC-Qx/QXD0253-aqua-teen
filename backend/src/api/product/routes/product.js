module.exports = { routes: [
 { method:'GET', path:'/products', handler:'product.catalog', config:{ auth:false } }, { method:'GET', path:'/products/:documentId', handler:'product.findOne', config:{ auth:false } },
 { method:'GET', path:'/merchant/products', handler:'product.mine', config:{ auth:false, middlewares:['global::require-user'] } }, { method:'POST', path:'/merchant/products', handler:'product.create', config:{ auth:false, middlewares:['global::require-user'] } },
 { method:'PUT', path:'/merchant/products/:documentId', handler:'product.update', config:{ auth:false, middlewares:['global::require-user'] } }, { method:'PATCH', path:'/merchant/products/:documentId/publication', handler:'product.publication', config:{ auth:false, middlewares:['global::require-user'] } }, { method:'DELETE', path:'/merchant/products/:documentId', handler:'product.remove', config:{ auth:false, middlewares:['global::require-user'] } }
] };

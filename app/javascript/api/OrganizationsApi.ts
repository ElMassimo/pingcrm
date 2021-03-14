// JsFromRoutes CacheKey 024663ed7ca905d970176cab53044b58
//
// DO NOT MODIFY: This file was automatically generated by JsFromRoutes.
import { definePathHelper } from '@js-from-routes/inertia'

export default {
  restore: definePathHelper('put', '/organizations/:id/restore'),
  list: definePathHelper('get', '/organizations'),
  create: definePathHelper('post', '/organizations'),
  edit: definePathHelper('get', '/organizations/:id/edit'),
  update: definePathHelper('patch', '/organizations/:id'),
  destroy: definePathHelper('delete', '/organizations/:id'),
}

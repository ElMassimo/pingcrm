// JsFromRoutes CacheKey c7c604d846c07f06e0b78f6f6301b7f4
//
// DO NOT MODIFY: This file was automatically generated by JsFromRoutes.
import { request } from '@/services/ApiService'
import { pathFor } from '@/utils/PathHelper'

export default {
  pathFor,

  restore: options =>
    request('put', '/organizations/:id/restore', options),

  list: options =>
    request('get', '/organizations', options),

  create: options =>
    request('post', '/organizations', options),

  edit: options =>
    request('get', '/organizations/:id/edit', options),

  update: options =>
    request('patch', '/organizations/:id', options),

  destroy: options =>
    request('delete', '/organizations/:id', options),
}

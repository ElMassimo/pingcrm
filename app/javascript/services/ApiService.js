import { Inertia } from '@inertiajs/inertia'
import { formatUrl } from '@/utils/UrlHelper'

// Public: Makes an AJAX request to the Rails server.
//
// method - One of 'get', 'post', 'path', 'put', 'delete'.
// url - The url of the request.
// options - Can be the "params" as a shorthand, or an Object with the following:
//   params: The query string parameters to interpolate in the URL.
//   data: The body of the request, should be a plain Object.
//   form: An InertiaJS form to be submitted.
//   path: Whether to return a raw path instead of making a request.
//
// Returns a Promise for the request.
export function request (method, url, attrs) {
  const { params = (attrs.data || attrs), data = {}, form, path, ...options } = attrs

  url = formatUrl(url, params)

  if (path) return url
  if (form) return form[method](url, options)

  const args = method === 'delete' ? [{ ...options, data  }] : [data, options]
  return Inertia[method](url, ...args)
}

if Rails.env.development?
  JsFromRoutes.config do |config|
    config.client_library = '@js-from-routes/inertia'
    config.file_suffix = 'Api.ts'
  end
end

if Rails.env.development?
  JsFromRoutes.config do |config|
    config.template_path = Rails.root.join('app', 'views', 'js_from_routes.js.erb')
  end
end

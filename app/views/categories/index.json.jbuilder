json.array!(@categories) do |category|
  json.extract! category, :id, :cat_name
  json.url category_url(category, format: :json)
end

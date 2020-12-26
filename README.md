# JSON Query Lambda

This small function allows to pass any JSON data and retrieve any property by using Lodash get path:

```
curl -s 'https://api.github.com/users/calbertts' | \
  curl -s -X POST -H "Content-Type: text/plain" --data-binary @- https://jsonquery.vercel.app/api/server?path=name

# Output: 
Carlos Castaño
```

## Parameters

1. `path`: Object path (Lodash https://lodash.com/docs/4.17.15#get)
2. `failIfNotFound`: If true, if the path is not found, the request will return with HTTP 400, otherwise undefined


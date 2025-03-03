addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'OPTIONS') {
    return handleOptionsRequest()
  }

  const method = request.method
  const url = new URL(request.url)
  const path = url.pathname
  const headers = new Headers(request.headers)

  const authHeader = headers.get('Authorization')
  if (!authHeader) {
    return new Response('Missing Authorization header', { status: 401 })
  }

  // 请替换为 x 的实际 API 基础 URL
  const apiUrl = `https://api.x.com${path}${url.search}`

  const apiRequest = new Request(apiUrl, {
    method: method,
    headers: headers,
    body: method !== 'GET' && method !== 'HEAD' ? await request.blob() : null
  })

  const apiResponse = await fetch(apiRequest)

  const response = new Response(apiResponse.body, apiResponse)
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  return response
}

function handleOptionsRequest() {
  const headers = new Headers()
  headers.set('Access-Control-Allow-Origin', '*')
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  headers.set('Access-Control-Max-Age', '86400')
  return new Response(null, { headers })
}

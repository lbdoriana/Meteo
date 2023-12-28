self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('https://api.openweathermap.org/data/2.5/weather?q=${pays}&appid=${APIKEY}&units=metric&lang=fr')) {
      event.respondWith(
          caches.match(event.request).then(function(response) {
              return response || fetch(event.request).then(function(response) {
                  return caches.open("mon-cache-Api").then(function(cache) {
                      cache.put(event.request, response.clone());
                      return response;
                  });
              });
          })
      );
  }
});
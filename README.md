# Test usage of this app

```
npm install
npm start
```

# Setup of MSW in your app

1. Installl MSW
```
npm install msw@latest --save-dev
```

2. Initiate script (see [instructions](https://mswjs.io/docs/integrations/browser))
3. Create [handlers](src/mock-api/handlers.js) and [browser](src/mock-api/browser.js) files, import browsers one into your index file
4. Start implementation of mock behavior in [handlers](src/mock-api/handlers.js) (it would be an array of mocked behaviors for different responses)


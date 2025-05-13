The dynamicIO flag is an experimental feature in Next.js that causes data fetching operations in the App Router to be excluded from pre-renders unless they are explicitly cached. This can be useful for optimizing the performance of dynamic data fetching in Server Components.

It is useful if your application requires fresh data fetching during runtime rather than serving from a pre-rendered cache.

It is expected to be used in conjunction with use cache so that your data fetching happens at runtime by default unless you define specific parts of your application to be cached with use cache at the page, function, or component level.

use cache directive allows you to mark a route, React component, or a function as cacheable. It can be used at the top of a file to indicate that all exports in the file should be cached, or inline at the top of function or component to cache the return value.

Open the app in production mode - npm run build then npm start

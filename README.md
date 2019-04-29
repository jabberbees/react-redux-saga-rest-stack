## Motivation

While creating my first React single page app, I struggled to piece together a solution that would fulfill all the following requirements :

* Use React for UI rendering only
* Use React Router v4
* Use React Redux for state management
* Use Redux-Saga to manage all side effects
* Use an abstracted, promised based REST API client
    - no dependency on HTTP client: fetch, axios, ...
    - no dependency on types: HttpResponse, ...
* No sacrifice on testability
    - no dirty tricks
    - no singleton modules

Later on I realised that in some cases I needed to know when a saga
had completed or failed so I looked for a way to have dispatched 
actions/sagas return a Promise.

This is exactly what redux-saga-thunk does so I added an example to
show how that works.

This is what I found. Comments are very welcome.

## How to use

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, run:

```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Inspirations

[Authentication with react-router-redux 5.x and redux-saga](https://medium.com/@stepankuzmin/authentication-with-react-router-redux-5-x-and-redux-saga-55da66b54be7)

[Using context in redux-saga](https://blog.faraday.io/context-in-redux-saga/)

[Protected routes and authentication with React Router v4](https://tylermcginnis.com/react-router-protected-routes-authentication/)

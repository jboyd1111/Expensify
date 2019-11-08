Here's a breakdown of how our components work in our Expensify application currently:
1. component calls action generator (action/expenses for example)
2. action generator returns object
3. component dispatches object
4. the redux store runs the reducers and it changes

Now, after incorporating the Google Firebase database, we've modified our application to behave thusly:
1. component calls action generator
2. action generator returns function
3. component dispatches function
4. function runs (has the ability to dispatch other actions and do
whatever it wants)
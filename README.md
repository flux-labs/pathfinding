#Flux Path Finding

This is a little function that wraps
[qiao/PathFinding.js](https://github.com/qiao/PathFinding.js) for use as a Flux
code block on [Flux.io](https://flux.io). NOTE: "code blocks" are only available
to a limited number of users on Flux.

To use this module as a code block, fork/clone and run:

```
$ npm install && npm run build
```

Then, create a new code block, Edit it, and paste in the contents of the
generated `dist/flux-pathfinding-bundle.js`. The inputs and outputs of the code
block should match that of the JSDoc for the `run` function in
flux-pathfinding.js.

To run tests, `npm run test`.

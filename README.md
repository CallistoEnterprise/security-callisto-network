# Main branch connected to the deployment Netlify main account
![](https://drive.google.com/uc?export=view&id=12cYLfxH07EGYX7cA3hRPND2sq8uc0tDX)

On your react package.json be sure to use 2 builds with testnet and mainet envirements

```javascript
scripts: {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "build:testing": "env-cmd -f .env.testing react-scripts build",
  "build:productiontesting": "env-cmd -f .env.productiontesting react-scripts build",
  ...
}
```

### .env.testing
This file should include the test net react envirement variables

### .env.productiontesting
This file should include the main net react envirement variables

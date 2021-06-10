const Router = require('koa-router');
const router = new Router();
const model = require('./rhinoceros');

// 3
// Add filters to the Get All Rhinos route
// The Get All Rhinos route currently returns every Rhino that has been added to list. 
// Modify this route so a user can pass in additional parameters on their 
// request that allow them to do the following:
// Return all Rhinos of a specified species (from the list above)
// Return all Rhinos with the specified name

router.get('/rhinoceros/name/:name', (ctx, next) => {
  const rhinoceroses = model.getAll();
  const getRhinoByName = rhinoceroses.filter(rhino => rhino.name === ctx.params.name);
  ctx.response.body = { getRhinoByName };
});

router.get('/rhinoceros/species/:species', (ctx, next) => {
  console.log(ctx.params.species);
  const rhinoceroses = model.getAll();
  const getRhinoBySpecies = rhinoceroses.filter(rhino => rhino.species === ctx.params.species);
  ctx.response.body = { getRhinoBySpecies };
});


// get all rhinos
router.get('/rhinoceros', (ctx, next) => {
  const rhinoceroses = model.getAll();
  ctx.response.body = { rhinoceroses };
});


// 1
// add a new route to API that fetches rhino by its ID
router.get('/rhinoceros/:id', (ctx, next) => {
  console.log(ctx.params.id);
  const rhinoceroses = model.getAll();
  const getRhinoById = rhinoceroses.filter(rhino => rhino.id == ctx.params.id)
  ctx.response.body = { getRhinoById }
});


// 2
// add validation to the create rhino --
// The body of the request must contain a `name` key with a string 
// value between 1 and 20 characters in length.

// The body of the request must contain a `species` key with a 
// string value representing the species of the Rhino to be added. 
// This value must be one of the following: 
// `white_rhinoceros`, `black_rhinoceros`, 
// `indian_rhinoceros`, `javan_rhinoceros`, 
// `sumatran_rhinoceros`

// The body should contain no additional keys.

// If the above criteria are not met the route should return an appropriate error response.

router.post('/rhinoceros', (ctx, next) => {
  console.log(ctx.request.body);

  const SPECIES = ["white_rhinoceros", "black_rhinoceros", 
  "indian_rhinoceros", "javan_rhinoceros", "sumatran_rhinoceros"]

  const keys = Object.keys(ctx.request.body);
  console.log(keys);
  if (!(keys.length == 2 
    && keys.includes('name')
    && keys.includes('species'))) {
		ctx.response.body = {
			status: 404,
			message: 'Invalid request, missing or wrong keys.'
    }
    return;
  }

  if (SPECIES.indexOf(ctx.request.body.species) == -1) {
		ctx.response.body = {
			status: 404,
			message: 'Invalid species type.'
    }
    return
  }

  if (ctx.request.body.name.length < 1 || ctx.request.body.name.length > 20) {
		ctx.response.body = {
			status: 404,
			message: 'Name too long or short.'
    }
    return
  }

  ctx.response.body = model.newRhinoceros(ctx.request.body);
});


// 4
// Add a route that returns Endangered Rhinos
// Add an `endangered` route to the API that returns all 
// Rhinos that belong to an endangered species.
// For the purpose of this problem, a species is considered 
// endangered when there are only one or two individuals of that species in the data.

router.get('/endangered', (ctx, next) => {
  const rhinoceroses = model.getAll();

  let rhinocerosesBySpecies = {}
  rhinoceroses.map(e => {
    if (!rhinocerosesBySpecies[e.species]) {
      rhinocerosesBySpecies[e.species] = []
    }
    rhinocerosesBySpecies[e.species].push(e.name);
  });

  const result = [];

  for (const sp in rhinocerosesBySpecies) {
    if (rhinocerosesBySpecies[sp].length <= 2) {
      result.push(rhinocerosesBySpecies[sp]);
    }
  }
  const r = [].concat(...result)

  ctx.response.body = { r };
});

module.exports = router;

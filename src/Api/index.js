const express = require("express");
const { postgraphile } = require("postgraphile");
//const logger = require("./logger.js");
const makeWrapResolversPlugin = require("./mutation.js");

const app = express();

app.use(
  postgraphile(
    "postgres://brijesh:qwedsa@localhost/testdb",
    "public",
    {
      watchPg: true,
      appendPlugins: [
        makeWrapResolversPlugin,
      ],
      subscriptions:true,
      graphiql: true,
      enhanceGraphiql: true,
    }
  )
);

app.listen(5000);
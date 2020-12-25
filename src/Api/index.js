const express = require("express");
const { postgraphile , makePluginHook } = require("postgraphile");
const makeWrapResolversPlugin = require("./mutation.js");
const SubscriptionPlugin = require("./SubscriptionPlugin.js");
const {default: PgPubsub} = require("@graphile/pg-pubsub");

const pluginHook = makePluginHook([PgPubsub]); // add the plugin hook. This will make the @pgSubscription avaiable in our schema definitions

const app = express();

app.use(
  postgraphile(
    "postgres://brijesh:qwedsa@localhost/testdb",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      pluginHook,
      subscriptions: true,
      simpleSubscriptions: true,

      appendPlugins: [
        makeWrapResolversPlugin,
        SubscriptionPlugin,
        //require("@graphile/subscriptions-lds").default,
      ],
      
      websocketMiddlewares: [
        // Add whatever middlewares you need here, note that they should only
        // manipulate properties on req/res, they must not sent response data. e.g.:
        //
        //   require('express-session')(),
        //   require('passport').initialize(),
        //   require('passport').session(),
      ],
      
    }
  )
);

app.listen(5000);
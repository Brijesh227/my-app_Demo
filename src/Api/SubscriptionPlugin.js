const { makeExtendSchemaPlugin, gql } = require("graphile-utils");

module.exports = makeExtendSchemaPlugin(build => {
    const {pgSql: sql,inflection} = build;
    
    return {
        typeDefs: gql`
            type CreateUserPayload{
                user: User
            }
            extend type Subscription{
                createUser: CreateUserPayload @pgSubscription(topic: ${embed(
        currentUserTopicFromContext
      )})

            }`,
        resolvers: {

        },
      };
});
const { makeWrapResolversPlugin } = require("graphile-utils");

const validateUserData = (prop) => {
  if(prop=="user"){
    return async (resolve, user, args, context, resolveInfo) => {
      console.log("hello from validateUser");
      args.input.user.option = (parseInt(args.input.user.option)+10).toString(); 
      //user = args.input[prop];
      //await isValidUserData(user);
      return resolve();
    };
  } else if(prop=="userpatch"){
    return async (resolve, user, args, context, resolveInfo) => {
      console.log("hello from Update");
      args.input.userPatch.option = (parseInt(args.input.userPatch.option)+20).toString(); 
      //user = args.input[prop];
      //await isValidUpdateUser(user);
      return resolve();
    };
  } 
};

module.exports = makeWrapResolversPlugin({
    Mutation : {
        createUser: validateUserData("user"),
        updateUserByUserId: validateUserData("userpatch"),
    },
});
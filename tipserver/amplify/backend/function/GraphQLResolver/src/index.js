/*
* @Author: fangzhouli
* @Date:   2021-04-10 16:32:07
* @Last Modified by:   fangzhouli
* @Last Modified time: 2021-04-17 14:54:59
*/

// const resolvers = {
//     Query: {
//         validateChemical: event => {
//             return validateChemical(event);
//         }
//     }
// }


// async function validateChemical(event) {
//     console.log(event);
// }

// event
// {
//   "typeName": "Query", /* Filled dynamically based on @function usage location */
//   "fieldName": "me", /* Filled dynamically based on @function usage location */
//   "arguments": { /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
exports.handler = async event => {
    console.log(event);
    // const typeHandler = resolvers[event.typeName];
    // if (typeHandler) {
    //     const resolver = typeHandler[event.fieldName];
    //     if (resolver) {
    //         return await resolver(event);
    //     }
    // }

    throw new Error("Resolver not found.");
};

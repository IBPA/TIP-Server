/*
* @Author: fangzhouli
* @Date:   2021-04-10 16:32:07
* @Last Modified by:   fangzhouli
* @Last Modified time: 2021-04-27 14:05:40
*/

const resolvers = {
  validateChemical: (args) => {
    const response = {
      status: null,
      message: null
    };

    if (args.cid === undefined && args.cas === undefined &&
        args.iupac === undefined && args.inchiKey === undefined) {
      // At least one publicly universal identifier is available.

      // TODO:
      //   Check online databases so that the fields are correct:
      //     PubChem, ChemSpider, etc.
      response.status = 200;
      response.message = "Success!";
    } else {
      // Non-publicly indentifiable data, so users have to provide data.
      if (args.otherNames === undefined || args.smiles === undefined ||
          args.mw === undefined) {
        response.status = 400;
        response.message = "ChemicalInputError: Chemicals with no public" +
        " identifier must have 'common_names', 'smiles', and 'mw' filled."
      } else {
        response.status = 200;
        response.message = "Success!";
      }
    }
    return response;
  },

  validateAssay: (args) => {
    const response = {
      status: null,
      message: null
    };

    if (args.type === 'AHR') {
      if (args.ahrType === undefined) {
        response.status = 400;
        response.message = "AssayInputError: AhR assays must have ahrType."
      } else if (['GE', 'DB', 'LB', 'NT'].includes(args.ahrType)) {
        response.status = 200;
        response.message = "Success!";
      } else {
        response.status = 400;
        response.message = "AssayInputError: AhR assays must be one of GE," +
        " DB, LB, and NT.";
      }
    }
    else if (args.type === 'ENZYME') {
      // Check each field
      if (args.protein === undefined || args.gene === undefined ||
          args.concentrationSubstrate === undefined ||
          args.concentrationTested === undefined ||
          args.inhibition === undefined ||
          args.ec50 === undefined) {
        response.status = 400;
        response.message = "AssayInputError: Enzymatic assays must have the" +
        " following fields: protein, gene, concentrationSubstrate," +
        " concentrationTested, inhibition, ec50.";
      }
      // else if () {
      //   TODO:
          // Check EC50 regex.
      // }
      else {
        response.status = 200;
        response.message = "Success!";
      }
    } else {
      throw new Error("Non-registered types detected.");
    }

    return response;
  }
}


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
exports.handler = async (event) => {
  console.log(event);
  const resolver = resolvers[event.fieldName];
  if (resolver) {
    return await resolver(event.arguments);
  }

  throw new Error("Resolver not found!");
};

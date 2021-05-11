// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Assay, Chemical, Response, EnzymaticAssayData, AhrAssayData } = initSchema(schema);

export {
  Assay,
  Chemical,
  Response,
  EnzymaticAssayData,
  AhrAssayData
};
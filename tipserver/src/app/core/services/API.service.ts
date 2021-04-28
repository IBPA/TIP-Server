/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateAssayInput = {
  id?: string | null;
  type: string;
  enzymeData?: EnzymaticAssayDataInput | null;
  ahrData?: AhrAssayDataInput | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID: string;
};

export type EnzymaticAssayDataInput = {
  protein?: string | null;
  gene?: string | null;
  concentrationSubstrate?: number | null;
  concentrationTested?: number | null;
  inhibition?: number | null;
  ec50?: string | null;
};

export type AhrAssayDataInput = {
  ahrType: string;
};

export type ModelAssayConditionInput = {
  type?: ModelStringInput | null;
  species?: ModelStringInput | null;
  pmids?: ModelIntInput | null;
  comment?: ModelStringInput | null;
  chemicalID?: ModelIDInput | null;
  and?: Array<ModelAssayConditionInput | null> | null;
  or?: Array<ModelAssayConditionInput | null> | null;
  not?: ModelAssayConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Assay = {
  __typename: "Assay";
  id?: string;
  type?: string;
  enzymeData?: EnzymaticAssayData;
  ahrData?: AhrAssayData;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID?: string;
  chemical?: Chemical;
  createdAt?: string;
  updatedAt?: string;
};

export type EnzymaticAssayData = {
  __typename: "EnzymaticAssayData";
  protein?: string | null;
  gene?: string | null;
  concentrationSubstrate?: number | null;
  concentrationTested?: number | null;
  inhibition?: number | null;
  ec50?: string | null;
};

export type AhrAssayData = {
  __typename: "AhrAssayData";
  ahrType?: string;
};

export type Chemical = {
  __typename: "Chemical";
  id?: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
  assays?: ModelAssayConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelAssayConnection = {
  __typename: "ModelAssayConnection";
  items?: Array<Assay | null> | null;
  nextToken?: string | null;
};

export type UpdateAssayInput = {
  id: string;
  type?: string | null;
  enzymeData?: EnzymaticAssayDataInput | null;
  ahrData?: AhrAssayDataInput | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID?: string | null;
};

export type DeleteAssayInput = {
  id?: string | null;
};

export type CreateChemicalInput = {
  id?: string | null;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
};

export type ModelChemicalConditionInput = {
  cid?: ModelIntInput | null;
  cas?: ModelStringInput | null;
  iupac?: ModelStringInput | null;
  inchikey?: ModelStringInput | null;
  other_names?: ModelStringInput | null;
  smiles?: ModelStringInput | null;
  mw?: ModelFloatInput | null;
  and?: Array<ModelChemicalConditionInput | null> | null;
  or?: Array<ModelChemicalConditionInput | null> | null;
  not?: ModelChemicalConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateChemicalInput = {
  id: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
};

export type DeleteChemicalInput = {
  id?: string | null;
};

export type Response = {
  __typename: "Response";
  status?: number;
  message?: string | null;
};

export type ModelAssayFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  species?: ModelStringInput | null;
  pmids?: ModelIntInput | null;
  comment?: ModelStringInput | null;
  chemicalID?: ModelIDInput | null;
  and?: Array<ModelAssayFilterInput | null> | null;
  or?: Array<ModelAssayFilterInput | null> | null;
  not?: ModelAssayFilterInput | null;
};

export type ModelChemicalFilterInput = {
  id?: ModelIDInput | null;
  cid?: ModelIntInput | null;
  cas?: ModelStringInput | null;
  iupac?: ModelStringInput | null;
  inchikey?: ModelStringInput | null;
  other_names?: ModelStringInput | null;
  smiles?: ModelStringInput | null;
  mw?: ModelFloatInput | null;
  and?: Array<ModelChemicalFilterInput | null> | null;
  or?: Array<ModelChemicalFilterInput | null> | null;
  not?: ModelChemicalFilterInput | null;
};

export type ModelChemicalConnection = {
  __typename: "ModelChemicalConnection";
  items?: Array<Chemical | null> | null;
  nextToken?: string | null;
};

export type CreateAssayMutation = {
  __typename: "Assay";
  id: string;
  type: string;
  enzymeData?: {
    __typename: "EnzymaticAssayData";
    protein?: string | null;
    gene?: string | null;
    concentrationSubstrate?: number | null;
    concentrationTested?: number | null;
    inhibition?: number | null;
    ec50?: string | null;
  } | null;
  ahrData?: {
    __typename: "AhrAssayData";
    ahrType: string;
  } | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID: string;
  chemical?: {
    __typename: "Chemical";
    id: string;
    cid?: number | null;
    cas?: string | null;
    iupac?: string | null;
    inchikey?: string | null;
    other_names?: Array<string | null> | null;
    smiles?: string | null;
    mw?: number | null;
    assays?: {
      __typename: "ModelAssayConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAssayMutation = {
  __typename: "Assay";
  id: string;
  type: string;
  enzymeData?: {
    __typename: "EnzymaticAssayData";
    protein?: string | null;
    gene?: string | null;
    concentrationSubstrate?: number | null;
    concentrationTested?: number | null;
    inhibition?: number | null;
    ec50?: string | null;
  } | null;
  ahrData?: {
    __typename: "AhrAssayData";
    ahrType: string;
  } | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID: string;
  chemical?: {
    __typename: "Chemical";
    id: string;
    cid?: number | null;
    cas?: string | null;
    iupac?: string | null;
    inchikey?: string | null;
    other_names?: Array<string | null> | null;
    smiles?: string | null;
    mw?: number | null;
    assays?: {
      __typename: "ModelAssayConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAssayMutation = {
  __typename: "Assay";
  id: string;
  type: string;
  enzymeData?: {
    __typename: "EnzymaticAssayData";
    protein?: string | null;
    gene?: string | null;
    concentrationSubstrate?: number | null;
    concentrationTested?: number | null;
    inhibition?: number | null;
    ec50?: string | null;
  } | null;
  ahrData?: {
    __typename: "AhrAssayData";
    ahrType: string;
  } | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID: string;
  chemical?: {
    __typename: "Chemical";
    id: string;
    cid?: number | null;
    cas?: string | null;
    iupac?: string | null;
    inchikey?: string | null;
    other_names?: Array<string | null> | null;
    smiles?: string | null;
    mw?: number | null;
    assays?: {
      __typename: "ModelAssayConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateChemicalMutation = {
  __typename: "Chemical";
  id: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
  assays?: {
    __typename: "ModelAssayConnection";
    items?: Array<{
      __typename: "Assay";
      id: string;
      type: string;
      species?: string | null;
      pmids?: Array<number | null> | null;
      comment?: string | null;
      chemicalID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateChemicalMutation = {
  __typename: "Chemical";
  id: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
  assays?: {
    __typename: "ModelAssayConnection";
    items?: Array<{
      __typename: "Assay";
      id: string;
      type: string;
      species?: string | null;
      pmids?: Array<number | null> | null;
      comment?: string | null;
      chemicalID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteChemicalMutation = {
  __typename: "Chemical";
  id: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
  assays?: {
    __typename: "ModelAssayConnection";
    items?: Array<{
      __typename: "Assay";
      id: string;
      type: string;
      species?: string | null;
      pmids?: Array<number | null> | null;
      comment?: string | null;
      chemicalID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ValidateAssayQuery = {
  __typename: "Response";
  status: number;
  message?: string | null;
};

export type ValidateChemicalQuery = {
  __typename: "Response";
  status: number;
  message?: string | null;
};

export type GetAssayQuery = {
  __typename: "Assay";
  id: string;
  type: string;
  enzymeData?: {
    __typename: "EnzymaticAssayData";
    protein?: string | null;
    gene?: string | null;
    concentrationSubstrate?: number | null;
    concentrationTested?: number | null;
    inhibition?: number | null;
    ec50?: string | null;
  } | null;
  ahrData?: {
    __typename: "AhrAssayData";
    ahrType: string;
  } | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID: string;
  chemical?: {
    __typename: "Chemical";
    id: string;
    cid?: number | null;
    cas?: string | null;
    iupac?: string | null;
    inchikey?: string | null;
    other_names?: Array<string | null> | null;
    smiles?: string | null;
    mw?: number | null;
    assays?: {
      __typename: "ModelAssayConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAssaysQuery = {
  __typename: "ModelAssayConnection";
  items?: Array<{
    __typename: "Assay";
    id: string;
    type: string;
    enzymeData?: {
      __typename: "EnzymaticAssayData";
      protein?: string | null;
      gene?: string | null;
      concentrationSubstrate?: number | null;
      concentrationTested?: number | null;
      inhibition?: number | null;
      ec50?: string | null;
    } | null;
    ahrData?: {
      __typename: "AhrAssayData";
      ahrType: string;
    } | null;
    species?: string | null;
    pmids?: Array<number | null> | null;
    comment?: string | null;
    chemicalID: string;
    chemical?: {
      __typename: "Chemical";
      id: string;
      cid?: number | null;
      cas?: string | null;
      iupac?: string | null;
      inchikey?: string | null;
      other_names?: Array<string | null> | null;
      smiles?: string | null;
      mw?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetChemicalQuery = {
  __typename: "Chemical";
  id: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
  assays?: {
    __typename: "ModelAssayConnection";
    items?: Array<{
      __typename: "Assay";
      id: string;
      type: string;
      species?: string | null;
      pmids?: Array<number | null> | null;
      comment?: string | null;
      chemicalID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListChemicalsQuery = {
  __typename: "ModelChemicalConnection";
  items?: Array<{
    __typename: "Chemical";
    id: string;
    cid?: number | null;
    cas?: string | null;
    iupac?: string | null;
    inchikey?: string | null;
    other_names?: Array<string | null> | null;
    smiles?: string | null;
    mw?: number | null;
    assays?: {
      __typename: "ModelAssayConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateAssaySubscription = {
  __typename: "Assay";
  id: string;
  type: string;
  enzymeData?: {
    __typename: "EnzymaticAssayData";
    protein?: string | null;
    gene?: string | null;
    concentrationSubstrate?: number | null;
    concentrationTested?: number | null;
    inhibition?: number | null;
    ec50?: string | null;
  } | null;
  ahrData?: {
    __typename: "AhrAssayData";
    ahrType: string;
  } | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID: string;
  chemical?: {
    __typename: "Chemical";
    id: string;
    cid?: number | null;
    cas?: string | null;
    iupac?: string | null;
    inchikey?: string | null;
    other_names?: Array<string | null> | null;
    smiles?: string | null;
    mw?: number | null;
    assays?: {
      __typename: "ModelAssayConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAssaySubscription = {
  __typename: "Assay";
  id: string;
  type: string;
  enzymeData?: {
    __typename: "EnzymaticAssayData";
    protein?: string | null;
    gene?: string | null;
    concentrationSubstrate?: number | null;
    concentrationTested?: number | null;
    inhibition?: number | null;
    ec50?: string | null;
  } | null;
  ahrData?: {
    __typename: "AhrAssayData";
    ahrType: string;
  } | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID: string;
  chemical?: {
    __typename: "Chemical";
    id: string;
    cid?: number | null;
    cas?: string | null;
    iupac?: string | null;
    inchikey?: string | null;
    other_names?: Array<string | null> | null;
    smiles?: string | null;
    mw?: number | null;
    assays?: {
      __typename: "ModelAssayConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAssaySubscription = {
  __typename: "Assay";
  id: string;
  type: string;
  enzymeData?: {
    __typename: "EnzymaticAssayData";
    protein?: string | null;
    gene?: string | null;
    concentrationSubstrate?: number | null;
    concentrationTested?: number | null;
    inhibition?: number | null;
    ec50?: string | null;
  } | null;
  ahrData?: {
    __typename: "AhrAssayData";
    ahrType: string;
  } | null;
  species?: string | null;
  pmids?: Array<number | null> | null;
  comment?: string | null;
  chemicalID: string;
  chemical?: {
    __typename: "Chemical";
    id: string;
    cid?: number | null;
    cas?: string | null;
    iupac?: string | null;
    inchikey?: string | null;
    other_names?: Array<string | null> | null;
    smiles?: string | null;
    mw?: number | null;
    assays?: {
      __typename: "ModelAssayConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateChemicalSubscription = {
  __typename: "Chemical";
  id: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
  assays?: {
    __typename: "ModelAssayConnection";
    items?: Array<{
      __typename: "Assay";
      id: string;
      type: string;
      species?: string | null;
      pmids?: Array<number | null> | null;
      comment?: string | null;
      chemicalID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateChemicalSubscription = {
  __typename: "Chemical";
  id: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
  assays?: {
    __typename: "ModelAssayConnection";
    items?: Array<{
      __typename: "Assay";
      id: string;
      type: string;
      species?: string | null;
      pmids?: Array<number | null> | null;
      comment?: string | null;
      chemicalID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteChemicalSubscription = {
  __typename: "Chemical";
  id: string;
  cid?: number | null;
  cas?: string | null;
  iupac?: string | null;
  inchikey?: string | null;
  other_names?: Array<string | null> | null;
  smiles?: string | null;
  mw?: number | null;
  assays?: {
    __typename: "ModelAssayConnection";
    items?: Array<{
      __typename: "Assay";
      id: string;
      type: string;
      species?: string | null;
      pmids?: Array<number | null> | null;
      comment?: string | null;
      chemicalID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAssay(
    input: CreateAssayInput,
    condition?: ModelAssayConditionInput
  ): Promise<CreateAssayMutation> {
    const statement = `mutation CreateAssay($input: CreateAssayInput!, $condition: ModelAssayConditionInput) {
        createAssay(input: $input, condition: $condition) {
          __typename
          id
          type
          enzymeData {
            __typename
            protein
            gene
            concentrationSubstrate
            concentrationTested
            inhibition
            ec50
          }
          ahrData {
            __typename
            ahrType
          }
          species
          pmids
          comment
          chemicalID
          chemical {
            __typename
            id
            cid
            cas
            iupac
            inchikey
            other_names
            smiles
            mw
            assays {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAssayMutation>response.data.createAssay;
  }
  async UpdateAssay(
    input: UpdateAssayInput,
    condition?: ModelAssayConditionInput
  ): Promise<UpdateAssayMutation> {
    const statement = `mutation UpdateAssay($input: UpdateAssayInput!, $condition: ModelAssayConditionInput) {
        updateAssay(input: $input, condition: $condition) {
          __typename
          id
          type
          enzymeData {
            __typename
            protein
            gene
            concentrationSubstrate
            concentrationTested
            inhibition
            ec50
          }
          ahrData {
            __typename
            ahrType
          }
          species
          pmids
          comment
          chemicalID
          chemical {
            __typename
            id
            cid
            cas
            iupac
            inchikey
            other_names
            smiles
            mw
            assays {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAssayMutation>response.data.updateAssay;
  }
  async DeleteAssay(
    input: DeleteAssayInput,
    condition?: ModelAssayConditionInput
  ): Promise<DeleteAssayMutation> {
    const statement = `mutation DeleteAssay($input: DeleteAssayInput!, $condition: ModelAssayConditionInput) {
        deleteAssay(input: $input, condition: $condition) {
          __typename
          id
          type
          enzymeData {
            __typename
            protein
            gene
            concentrationSubstrate
            concentrationTested
            inhibition
            ec50
          }
          ahrData {
            __typename
            ahrType
          }
          species
          pmids
          comment
          chemicalID
          chemical {
            __typename
            id
            cid
            cas
            iupac
            inchikey
            other_names
            smiles
            mw
            assays {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAssayMutation>response.data.deleteAssay;
  }
  async CreateChemical(
    input: CreateChemicalInput,
    condition?: ModelChemicalConditionInput
  ): Promise<CreateChemicalMutation> {
    const statement = `mutation CreateChemical($input: CreateChemicalInput!, $condition: ModelChemicalConditionInput) {
        createChemical(input: $input, condition: $condition) {
          __typename
          id
          cid
          cas
          iupac
          inchikey
          other_names
          smiles
          mw
          assays {
            __typename
            items {
              __typename
              id
              type
              species
              pmids
              comment
              chemicalID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChemicalMutation>response.data.createChemical;
  }
  async UpdateChemical(
    input: UpdateChemicalInput,
    condition?: ModelChemicalConditionInput
  ): Promise<UpdateChemicalMutation> {
    const statement = `mutation UpdateChemical($input: UpdateChemicalInput!, $condition: ModelChemicalConditionInput) {
        updateChemical(input: $input, condition: $condition) {
          __typename
          id
          cid
          cas
          iupac
          inchikey
          other_names
          smiles
          mw
          assays {
            __typename
            items {
              __typename
              id
              type
              species
              pmids
              comment
              chemicalID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChemicalMutation>response.data.updateChemical;
  }
  async DeleteChemical(
    input: DeleteChemicalInput,
    condition?: ModelChemicalConditionInput
  ): Promise<DeleteChemicalMutation> {
    const statement = `mutation DeleteChemical($input: DeleteChemicalInput!, $condition: ModelChemicalConditionInput) {
        deleteChemical(input: $input, condition: $condition) {
          __typename
          id
          cid
          cas
          iupac
          inchikey
          other_names
          smiles
          mw
          assays {
            __typename
            items {
              __typename
              id
              type
              species
              pmids
              comment
              chemicalID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChemicalMutation>response.data.deleteChemical;
  }
  async ValidateAssay(
    type: string,
    protein?: string,
    gene?: string,
    concentrationSubstrate?: number,
    concentrationTested?: number,
    inhibition?: number,
    ec50?: string,
    ahrType?: string,
    species?: string,
    pmids?: Array<number | null>,
    comment?: string
  ): Promise<ValidateAssayQuery> {
    const statement = `query ValidateAssay($type: String!, $protein: String, $gene: String, $concentrationSubstrate: Float, $concentrationTested: Float, $inhibition: Float, $ec50: String, $ahrType: String, $species: String, $pmids: [Int], $comment: String) {
        validateAssay(type: $type, protein: $protein, gene: $gene, concentrationSubstrate: $concentrationSubstrate, concentrationTested: $concentrationTested, inhibition: $inhibition, ec50: $ec50, ahrType: $ahrType, species: $species, pmids: $pmids, comment: $comment) {
          __typename
          status
          message
        }
      }`;
    const gqlAPIServiceArguments: any = {
      type
    };
    if (protein) {
      gqlAPIServiceArguments.protein = protein;
    }
    if (gene) {
      gqlAPIServiceArguments.gene = gene;
    }
    if (concentrationSubstrate) {
      gqlAPIServiceArguments.concentrationSubstrate = concentrationSubstrate;
    }
    if (concentrationTested) {
      gqlAPIServiceArguments.concentrationTested = concentrationTested;
    }
    if (inhibition) {
      gqlAPIServiceArguments.inhibition = inhibition;
    }
    if (ec50) {
      gqlAPIServiceArguments.ec50 = ec50;
    }
    if (ahrType) {
      gqlAPIServiceArguments.ahrType = ahrType;
    }
    if (species) {
      gqlAPIServiceArguments.species = species;
    }
    if (pmids) {
      gqlAPIServiceArguments.pmids = pmids;
    }
    if (comment) {
      gqlAPIServiceArguments.comment = comment;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ValidateAssayQuery>response.data.validateAssay;
  }
  async ValidateChemical(
    cid?: number,
    cas?: string,
    iupac?: string,
    inchiKey?: string,
    otherNames?: Array<string | null>,
    smiles?: string,
    mw?: number
  ): Promise<ValidateChemicalQuery> {
    const statement = `query ValidateChemical($cid: Int, $cas: String, $iupac: String, $inchiKey: String, $otherNames: [String], $smiles: String, $mw: Float) {
        validateChemical(cid: $cid, cas: $cas, iupac: $iupac, inchiKey: $inchiKey, otherNames: $otherNames, smiles: $smiles, mw: $mw) {
          __typename
          status
          message
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (cid) {
      gqlAPIServiceArguments.cid = cid;
    }
    if (cas) {
      gqlAPIServiceArguments.cas = cas;
    }
    if (iupac) {
      gqlAPIServiceArguments.iupac = iupac;
    }
    if (inchiKey) {
      gqlAPIServiceArguments.inchiKey = inchiKey;
    }
    if (otherNames) {
      gqlAPIServiceArguments.otherNames = otherNames;
    }
    if (smiles) {
      gqlAPIServiceArguments.smiles = smiles;
    }
    if (mw) {
      gqlAPIServiceArguments.mw = mw;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ValidateChemicalQuery>response.data.validateChemical;
  }
  async GetAssay(id: string): Promise<GetAssayQuery> {
    const statement = `query GetAssay($id: ID!) {
        getAssay(id: $id) {
          __typename
          id
          type
          enzymeData {
            __typename
            protein
            gene
            concentrationSubstrate
            concentrationTested
            inhibition
            ec50
          }
          ahrData {
            __typename
            ahrType
          }
          species
          pmids
          comment
          chemicalID
          chemical {
            __typename
            id
            cid
            cas
            iupac
            inchikey
            other_names
            smiles
            mw
            assays {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAssayQuery>response.data.getAssay;
  }
  async ListAssays(
    filter?: ModelAssayFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAssaysQuery> {
    const statement = `query ListAssays($filter: ModelAssayFilterInput, $limit: Int, $nextToken: String) {
        listAssays(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            enzymeData {
              __typename
              protein
              gene
              concentrationSubstrate
              concentrationTested
              inhibition
              ec50
            }
            ahrData {
              __typename
              ahrType
            }
            species
            pmids
            comment
            chemicalID
            chemical {
              __typename
              id
              cid
              cas
              iupac
              inchikey
              other_names
              smiles
              mw
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAssaysQuery>response.data.listAssays;
  }
  async GetChemical(id: string): Promise<GetChemicalQuery> {
    const statement = `query GetChemical($id: ID!) {
        getChemical(id: $id) {
          __typename
          id
          cid
          cas
          iupac
          inchikey
          other_names
          smiles
          mw
          assays {
            __typename
            items {
              __typename
              id
              type
              species
              pmids
              comment
              chemicalID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChemicalQuery>response.data.getChemical;
  }
  async ListChemicals(
    filter?: ModelChemicalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChemicalsQuery> {
    const statement = `query ListChemicals($filter: ModelChemicalFilterInput, $limit: Int, $nextToken: String) {
        listChemicals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            cid
            cas
            iupac
            inchikey
            other_names
            smiles
            mw
            assays {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChemicalsQuery>response.data.listChemicals;
  }
  OnCreateAssayListener: Observable<
    SubscriptionResponse<OnCreateAssaySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAssay {
        onCreateAssay {
          __typename
          id
          type
          enzymeData {
            __typename
            protein
            gene
            concentrationSubstrate
            concentrationTested
            inhibition
            ec50
          }
          ahrData {
            __typename
            ahrType
          }
          species
          pmids
          comment
          chemicalID
          chemical {
            __typename
            id
            cid
            cas
            iupac
            inchikey
            other_names
            smiles
            mw
            assays {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAssaySubscription>>;

  OnUpdateAssayListener: Observable<
    SubscriptionResponse<OnUpdateAssaySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAssay {
        onUpdateAssay {
          __typename
          id
          type
          enzymeData {
            __typename
            protein
            gene
            concentrationSubstrate
            concentrationTested
            inhibition
            ec50
          }
          ahrData {
            __typename
            ahrType
          }
          species
          pmids
          comment
          chemicalID
          chemical {
            __typename
            id
            cid
            cas
            iupac
            inchikey
            other_names
            smiles
            mw
            assays {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAssaySubscription>>;

  OnDeleteAssayListener: Observable<
    SubscriptionResponse<OnDeleteAssaySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAssay {
        onDeleteAssay {
          __typename
          id
          type
          enzymeData {
            __typename
            protein
            gene
            concentrationSubstrate
            concentrationTested
            inhibition
            ec50
          }
          ahrData {
            __typename
            ahrType
          }
          species
          pmids
          comment
          chemicalID
          chemical {
            __typename
            id
            cid
            cas
            iupac
            inchikey
            other_names
            smiles
            mw
            assays {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAssaySubscription>>;

  OnCreateChemicalListener: Observable<
    SubscriptionResponse<OnCreateChemicalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateChemical {
        onCreateChemical {
          __typename
          id
          cid
          cas
          iupac
          inchikey
          other_names
          smiles
          mw
          assays {
            __typename
            items {
              __typename
              id
              type
              species
              pmids
              comment
              chemicalID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateChemicalSubscription>>;

  OnUpdateChemicalListener: Observable<
    SubscriptionResponse<OnUpdateChemicalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateChemical {
        onUpdateChemical {
          __typename
          id
          cid
          cas
          iupac
          inchikey
          other_names
          smiles
          mw
          assays {
            __typename
            items {
              __typename
              id
              type
              species
              pmids
              comment
              chemicalID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateChemicalSubscription>>;

  OnDeleteChemicalListener: Observable<
    SubscriptionResponse<OnDeleteChemicalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteChemical {
        onDeleteChemical {
          __typename
          id
          cid
          cas
          iupac
          inchikey
          other_names
          smiles
          mw
          assays {
            __typename
            items {
              __typename
              id
              type
              species
              pmids
              comment
              chemicalID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteChemicalSubscription>>;
}

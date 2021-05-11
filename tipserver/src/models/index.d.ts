import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Response {
  readonly status: number;
  readonly message?: string;
  constructor(init: ModelInit<Response>);
}

export declare class EnzymaticAssayData {
  readonly protein?: string;
  readonly gene?: string;
  readonly concentrationSubstrate?: number;
  readonly concentrationTested?: number;
  readonly inhibition?: number;
  readonly ec50?: string;
  constructor(init: ModelInit<EnzymaticAssayData>);
}

export declare class AhrAssayData {
  readonly ahrType?: string;
  constructor(init: ModelInit<AhrAssayData>);
}

export declare class Assay {
  readonly id: string;
  readonly type: string;
  readonly enzymeData?: EnzymaticAssayData;
  readonly ahrData?: AhrAssayData;
  readonly species?: string;
  readonly pmids?: (number | null)[];
  readonly comment?: string;
  readonly chemical?: Chemical;
  constructor(init: ModelInit<Assay>);
  static copyOf(source: Assay, mutator: (draft: MutableModel<Assay>) => MutableModel<Assay> | void): Assay;
}

export declare class Chemical {
  readonly id: string;
  readonly cid?: number;
  readonly cas?: string;
  readonly iupac?: string;
  readonly inchiKey?: string;
  readonly otherNames?: (string | null)[];
  readonly smiles?: string;
  readonly mw?: number;
  readonly assays?: (Assay | null)[];
  constructor(init: ModelInit<Chemical>);
  static copyOf(source: Chemical, mutator: (draft: MutableModel<Chemical>) => MutableModel<Chemical> | void): Chemical;
}
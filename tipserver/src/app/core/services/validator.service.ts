import { Injectable } from '@angular/core';

import { APIService } from './API.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private service: APIService) { }

  async validateChemical(chemicalInput: any) {
    return await this.service.ValidateChemical(
      chemicalInput.cid,
      chemicalInput.cas,
      chemicalInput.iupac,
      chemicalInput.inchiKey,
      chemicalInput.otherNames,
      chemicalInput.smiles,
      chemicalInput.mw);
  }

  async validateAssay(type: string, assayInput: any) {
    if (!["ENZYME", "AHR"].includes(type)) {
      throw new Error("Typo in data type.");
    }

    return this.service.ValidateAssay(
      type,
      assayInput.enzymeData.protein,
      assayInput.enzymeData.gene,
      assayInput.enzymeData.concentrationSubstrate,
      assayInput.enzymeData.concentrationTested,
      assayInput.enzymeData.inhibition,
      assayInput.enzymeData.ec50,
      assayInput.ahrData.ahrType,
      assayInput.species,
      assayInput.pmids,
      assayInput.comment);
  }
}

// TODO:
//   Report error?

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor() { }

  isFirstAssay(rowJson: any) {
    if (rowJson.cid + rowJson.cas + rowJson.iupac + rowJson.otherNames
        + rowJson.smiles + rowJson.mw === '') {
      return false;
    }
    return true;
  }

  parseChemicalJson(chemical: any) {
    let parsedChemical: any = {};

    if (chemical.cid === '') {
      parsedChemical.cid = null;
    } else {
      parsedChemical.cid = parseInt(chemical.cid);
    }

    if (chemical.cas === '') {
      parsedChemical.cas = null;
    } else {
      parsedChemical.cas = chemical.cas;
    }

    if (chemical.otherNames === '') {
      parsedChemical.otherNames = null;
    } else {
      parsedChemical.otherNames = chemical.otherNames.split(';');
    }

    if (chemical.iupac === '') {
      parsedChemical.iupac = null;
    } else {
      parsedChemical.iupac = chemical.iupac;
    }

    if (chemical.inchiKey === '') {
      parsedChemical.inchiKey = null;
    } else {
      parsedChemical.inchiKey = chemical.inchiKey;
    }

    if (chemical.smiles === '') {
      parsedChemical.smiles = null;
    } else {
      parsedChemical.smiles = chemical.smiles;
    }

    if (chemical.mw === '') {
      parsedChemical.mw = null;
    } else {
      parsedChemical.mw = parseFloat(chemical.mw);
    }

    return parsedChemical;
  }

  parseAssayJson(uploadDataType: string, assay: any) {
    let parsedAssay: any = {
      type: uploadDataType,
      enzymeData: {},
      ahrData: {},
      species: null,
      pmids: null,
      comment: null,
      chemicalID: null
    };

    if (uploadDataType === 'AhR') {  // AhR fields.
      parsedAssay.enzymeData.protein = null;
      parsedAssay.enzymeData.gene = null;
      parsedAssay.enzymeData.concentrationSubstrate = null;
      parsedAssay.enzymeData.concentrationTested = null;
      parsedAssay.enzymeData.inhibition = null;
      parsedAssay.enzymeData.ec50 = null;

      parsedAssay.ahrData.ahrType = assay.ahrType;
    } else {  // Enzyme fields.
      if (assay.protein !== '') {
        parsedAssay.enzymeData.protein = assay.protein;
      }
      if (assay.gene !== '') {
        parsedAssay.enzymeData.gene = assay.gene;
      }
      if (assay.concentrationSubstrate !== '') {
        parsedAssay.enzymeData.concentrationSubstrate = parseFloat(
          assay.concentrationSubstrate);
      }
      if (assay.concentrationTested !== '') {
        parsedAssay.enzymeData.concentrationTested = parseFloat(
          assay.concentrationTested);
      }
      if (assay.inhibition !== '') {
        parsedAssay.enzymeData.inhibition = parseFloat(assay.inhibition);
      }
      if (assay.ec50 !== '') {
        parsedAssay.enzymeData.ec50 = assay.ec50;
      }

      parsedAssay.ahrData.ahrType = null;
    }
    // Common fields.
    parsedAssay.species = assay.species;
    if (assay.pmids !== '') {
      parsedAssay.pmids = assay.pmids.split(';').map((x: any) => parseInt(x));
    }
    if (assay.comment !== '') {
      parsedAssay.comment = assay.comment;
    }
    return parsedAssay;
  }
}

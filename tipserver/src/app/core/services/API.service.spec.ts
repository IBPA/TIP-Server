import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIService } from './API.service';

describe('APIService', () => {
  let service: APIService;
  let testChemical = {
    cid: 12341234,
    cas: "123-45-67",
    iupac: "Super-duper-long-name",
    inchiKey: "IAMFAKEINCHIKEY-N",
    otherNames: ["Fake name 1", "Fake name 2"],
    smiles: "COOFAKEOOCH",
    mw: 1234.45
  };

  let testAssays = [
    {
      protein: "sEH",
      gene: "EPHX2",
      concentrationSubstrate: 5,
      concentrationTested: 1,
      inhibition: 23,
      ec50: ">1000",
      species: "Homo sapiens",
      pmids: [20049205],
      comment: "method: CMNPC"
    },
    {
      ahrType: "GE",
      species: "Homo sapiens",
      pmids:[18616291]
    }];

  beforeEach(() => { service = new APIService(); });

  it('#ValidateChemical should pass', async () => {
    let response = await service.ValidateChemical(
      testChemical.cid,
      testChemical.cas,
      testChemical.iupac,
      testChemical.inchiKey,
      testChemical.otherNames,
      testChemical.smiles,
      testChemical.mw);
    expect(response.status).toEqual(200);
  });

  it('#ValidateAssay should pass for ENZYME', async () => {
    let response = await service.ValidateAssay(
      "ENZYME",
      testAssays[0].protein,
      testAssays[0].gene,
      testAssays[0].concentrationSubstrate,
      testAssays[0].concentrationTested,
      testAssays[0].inhibition,
      testAssays[0].ec50,
      testAssays[0].ahrType,
      testAssays[0].species,
      testAssays[0].pmids,
      testAssays[0].comment);
    expect(response.status).toEqual(200);
  });

  it('#ValidateAssay should pass for AHR', async () => {
    let response = await service.ValidateAssay(
      "AHR",
      testAssays[1].protein,
      testAssays[1].gene,
      testAssays[1].concentrationSubstrate,
      testAssays[1].concentrationTested,
      testAssays[1].inhibition,
      testAssays[1].ec50,
      testAssays[1].ahrType,
      testAssays[1].species,
      testAssays[1].pmids,
      testAssays[1].comment);
    expect(response.status).toEqual(200);
  });
})

import { TestBed } from '@angular/core/testing';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
  let service: ValidatorService;

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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#ValidateChemical should pass', async () => {
    let response = await service.validateChemical(
      testChemical);
    expect(response.status).toEqual(200);
  });

  it('#ValidateAssay should pass for ENZYME', async () => {
    let response = await service.validateAssay(
      "ENZYME",
      testAssays[0]);
    expect(response.status).toEqual(200);
  });

  it('#ValidateAssay should pass for AHR', async () => {
    let response = await service.validateAssay(
      "AHR",
      testAssays[1]);
    expect(response.status).toEqual(200);
  });
});

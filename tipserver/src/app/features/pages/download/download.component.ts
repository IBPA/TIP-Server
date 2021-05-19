/*
  TODO:
    - scalable column design.
 */

import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
import { Component, OnInit } from '@angular/core';
import { APIService } from '@app/core/services/API.service';

import { jsonArrayToCsv } from '@app/shared/utils/csv';

@Component({
  selector: 'download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private service: APIService) { }

  ngOnInit(): void {
  }

  async prepareAhrAssaysCsv() {
    let assays: any = [];
    let nextToken = undefined;
    while (true) {
      let res: any = await this.service.ListAssays(
        { type: { eq: 'AhR' } }, 20000, nextToken);
      assays = assays.concat(res!.items!);

      if (res.nextToken === null) {
        break;
      } else {
        nextToken = res.nextToken;
      }
    }

    let assaysJson = [];
    let columns = ['cid', 'cas', 'iupac', 'otherNames', 'smiles', 'mw',
                   'ahrType', 'species', 'pmids', 'comment'];
    let blob = null;
    let currentChemical = "";

    // Format AhR assays.
    for (let i = 0; i < assays.length; i++) {
      let item = {
        chemicalID: assays[i]!.chemicalID,
        cid: assays[i]!.chemical!.cid,
        cas: assays[i]!.chemical!.cas,
        iupac: assays[i]!.chemical!.iupac,
        otherNames: assays[i]!.chemical!.otherNames !== null ? assays[i]!.chemical!.otherNames!.join(';') : null,
        smiles: assays[i]!.chemical!.smiles,
        mw: assays[i]!.chemical!.mw,
        ahrType: assays[i]!.ahrData!.ahrType,
        species: assays[i]!.species,
        pmids: assays[i]!.pmids !== null ? assays[i]!.pmids!.join(';') : null,
        comment: assays[i]!.comment
      };
      assaysJson.push(item);
    }

    // Sort by chemicalID so that assays of the same chemical are adjacent.
    //   Only shows the first row of a chemical group.
    assaysJson.sort((a, b) => a.chemicalID > b.chemicalID ? 1 : -1);
    for (let i = 0; i < assaysJson.length; i++) {
      if (assaysJson[i].chemicalID !== currentChemical) {
        currentChemical = assaysJson[i].chemicalID;
      } else {
        assaysJson[i].cid = null;
        assaysJson[i].cas = null;
        assaysJson[i].iupac = null;
        assaysJson[i].otherNames = null;
        assaysJson[i].smiles = null;
        assaysJson[i].mw = null;
      }
    }
    return jsonArrayToCsv(assaysJson, columns);
  }

  async prepareEnzymeticAssaysCsv() {
    let assays: any = [];
    let nextToken = undefined;
    while (true) {
      let res: any = await this.service.ListAssays(
        { type: { eq: 'Enzyme' } }, 20000, nextToken);
      assays = assays.concat(res!.items!);

      if (res.nextToken === null) {
        break;
      } else {
        nextToken = res.nextToken;
      }
    }

    let assaysJson = [];
    let columns = ['cid', 'cas', 'iupac', 'otherNames', 'smiles', 'mw',
                   'protein', 'gene', 'species', 'concentrationSubstrate',
                   'concentrationTested', 'inhibition', 'ec50', 'pmids',
                   'comment'];
    let blob = null;
    let currentChemical = "";

    // Format AhR assays.
    for (let i = 0; i < assays.length; i++) {
      let item = {
        chemicalID: assays[i]!.chemicalID,
        cid: assays[i]!.chemical!.cid,
        cas: assays[i]!.chemical!.cas,
        iupac: assays[i]!.chemical!.iupac,
        otherNames: assays[i]!.chemical!.otherNames !== null ? assays[i]!.chemical!.otherNames!.join(';') : null,
        smiles: assays[i]!.chemical!.smiles,
        mw: assays[i]!.chemical!.mw,
        protein: assays[i]!.enzymeData!.protein,
        gene: assays[i]!.enzymeData!.gene,
        species: assays[i]!.species,
        concentrationSubstrate: assays[i]!.enzymeData!.concentrationSubstrate,
        concentrationTested: assays[i]!.enzymeData!.concentrationTested,
        inhibition: assays[i]!.enzymeData!.inhibition,
        ec50: assays[i]!.enzymeData!.ec50,
        pmids: assays[i]!.pmids !== null ? assays[i]!.pmids!.join(';') : null,
        comment: assays[i]!.comment
      };
      assaysJson.push(item);
    }

    // Sort by chemicalID so that assays of the same chemical are adjacent.
    //   Only shows the first row of a chemical group.
    assaysJson.sort((a, b) => a.chemicalID > b.chemicalID ? 1 : -1);
    for (let i = 0; i < assaysJson.length; i++) {
      if (assaysJson[i].chemicalID !== currentChemical) {
        currentChemical = assaysJson[i].chemicalID;
      } else {
        assaysJson[i].cid = null;
        assaysJson[i].cas = null;
        assaysJson[i].iupac = null;
        assaysJson[i].otherNames = null;
        assaysJson[i].smiles = null;
        assaysJson[i].mw = null;
      }
    }
    return jsonArrayToCsv(assaysJson, columns);
  }

  async onDownload() {
    let zip = new JSZip();
    let ahrCsvString = await this.prepareAhrAssaysCsv();
    let enzymeCsvString = await this.prepareEnzymeticAssaysCsv();

    zip.file("ahr.csv", ahrCsvString);
    zip.file("enzyme.csv", enzymeCsvString);
    zip.generateAsync({ type:'blob' })
      .then(content => {
        FileSaver.saveAs(content, "tipData.zip");
      });
  }

}

export const schema = {
    "models": {
        "Assay": {
            "name": "Assay",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "enzymeData": {
                    "name": "enzymeData",
                    "isArray": false,
                    "type": {
                        "nonModel": "EnzymaticAssayData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ahrData": {
                    "name": "ahrData",
                    "isArray": false,
                    "type": {
                        "nonModel": "AhrAssayData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "species": {
                    "name": "species",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pmids": {
                    "name": "pmids",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "comment": {
                    "name": "comment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "chemical": {
                    "name": "chemical",
                    "isArray": false,
                    "type": {
                        "model": "Chemical"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "chemicalID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Assays",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "versioned",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byChemical",
                        "fields": [
                            "chemicalID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Chemical": {
            "name": "Chemical",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "cid": {
                    "name": "cid",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "cas": {
                    "name": "cas",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "iupac": {
                    "name": "iupac",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "inchiKey": {
                    "name": "inchiKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "otherNames": {
                    "name": "otherNames",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "smiles": {
                    "name": "smiles",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "mw": {
                    "name": "mw",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "assays": {
                    "name": "assays",
                    "isArray": true,
                    "type": {
                        "model": "Assay"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "chemical"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Chemicals",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "versioned",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "Response": {
            "name": "Response",
            "fields": {
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "EnzymaticAssayData": {
            "name": "EnzymaticAssayData",
            "fields": {
                "protein": {
                    "name": "protein",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gene": {
                    "name": "gene",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "concentrationSubstrate": {
                    "name": "concentrationSubstrate",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "concentrationTested": {
                    "name": "concentrationTested",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "inhibition": {
                    "name": "inhibition",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "ec50": {
                    "name": "ec50",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AhrAssayData": {
            "name": "AhrAssayData",
            "fields": {
                "ahrType": {
                    "name": "ahrType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "5b25ece638338b1a420ecd9706f4559a"
};
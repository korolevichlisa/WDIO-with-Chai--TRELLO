import newman from 'newman';
import dotenv from 'dotenv';
dotenv.config();
newman.run({
    collection: {
        "info": {
            "_postman_id": "da25de3d-2707-4ee9-984f-312985881a7b",
            "name": "Trello",
            "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
            "_exporter_id": "18408151",
            "_collection_link": "https://martian-moon-537648.postman.co/workspace/libapi~44827513-c00e-42d3-b216-bc67bab3449c/collection/18408151-da25de3d-2707-4ee9-984f-312985881a7b?action=share&source=collection_link&creator=18408151"
        },
        "item": [
            {
                "name": "Create a Board",
                "event": [
                    {
                        "listen": "test",
                        "script": {
                            "exec": [
                                "var jsonData = pm.response.json()\r",
                                "pm.environment.set(\"boardId\", jsonData.id);\r",
                                "\r",
                                "pm.test(\"Status code is 200\", function () {\r",
                                "    pm.response.to.have.status(200);\r",
                                "});\r",
                                "\r",
                                "pm.test(\"Content-Type is application/json;\", function () {\r",
                                "    pm.response.to.have.header(\"Content-Type\",\"application/json; charset=utf-8\");\r",
                                "});\r",
                                "\r",
                                "pm.test(\"Body matches string\", function () {\r",
                                "    pm.expect(jsonData.name).to.include(\"test\");\r",
                                "});\r",
                                "\r",
                                ""
                            ],
                            "type": "text/javascript",
                            "packages": {}
                        }
                    }
                ],
                "request": {
                    "auth": {
                        "type": "bearer",
                        "bearer": [
                            {
                                "key": "token",
                                "value": "{{tokenTrello}}",
                                "type": "string"
                            }
                        ]
                    },
                    "method": "POST",
                    "header": [],
                    "url": {
                        "raw": "https://api.trello.com/1/boards/?name={{boardName}}&key={{key}}&token={{trelloToken}}",
                        "protocol": "https",
                        "host": [
                            "api",
                            "trello",
                            "com"
                        ],
                        "path": [
                            "1",
                            "boards",
                            ""
                        ],
                        "query": [
                            {
                                "key": "name",
                                "value": "{{boardName}}"
                            },
                            {
                                "key": "key",
                                "value": "{{key}}"
                            },
                            {
                                "key": "token",
                                "value": "{{trelloToken}}"
                            },
                            {
                                "key": "",
                                "value": "",
                                "disabled": true
                            }
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "Get Board",
                "event": [
                    {
                        "listen": "test",
                        "script": {
                            "exec": [
                                "pm.test(\"Status code is 200\", function () {\r",
                                "    pm.response.to.have.status(200);\r",
                                "});\r",
                                "\r",
                                "pm.test(\"Content-Type is application/json;\", function () {\r",
                                "    pm.response.to.have.header(\"Content-Type\",\"application/json; charset=utf-8\");\r",
                                "});\r",
                                "\r",
                                "pm.test(\"Correcr board name is returned\", function () {\r",
                                "    var jsonData = pm.response.json();\r",
                                "    pm.expect(jsonData.name).to.eql(pm.environment.get(\"boardName\"));\r",
                                "});\r",
                                ""
                            ],
                            "type": "text/javascript",
                            "packages": {}
                        }
                    }
                ],
                "request": {
                    "auth": {
                        "type": "noauth"
                    },
                    "method": "GET",
                    "header": [],
                    "url": {
                        "raw": "{{trelloUrl}}/1/boards/{{boardId}}?token={{trelloToken}}&key={{key}}",
                        "host": [
                            "{{trelloUrl}}"
                        ],
                        "path": [
                            "1",
                            "boards",
                            "{{boardId}}"
                        ],
                        "query": [
                            {
                                "key": "token",
                                "value": "{{trelloToken}}"
                            },
                            {
                                "key": "id",
                                "value": "66d6b2e52afc9cb8c1571ce4",
                                "disabled": true
                            },
                            {
                                "key": "key",
                                "value": "{{key}}"
                            }
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "Update a board",
                "event": [
                    {
                        "listen": "test",
                        "script": {
                            "exec": [
                                "pm.test(\"Status code is 200\", function () {\r",
                                "    pm.response.to.have.status(200);\r",
                                "});\r",
                                "\r",
                                "pm.test(\"Content-Type is application/json;\", function () {\r",
                                "    pm.response.to.have.header(\"Content-Type\",\"application/json; charset=utf-8\");\r",
                                "});\r",
                                "\r",
                                "pm.test(\"Changed name of board to 'board test'\", function () {\r",
                                "    pm.expect(pm.response.text()).to.include(\"board test\");\r",
                                "});"
                            ],
                            "type": "text/javascript",
                            "packages": {}
                        }
                    }
                ],
                "request": {
                    "method": "PUT",
                    "header": [],
                    "body": {
                        "mode": "raw",
                        "raw": "{\r\n    \"name\": \"board test\"\r\n}",
                        "options": {
                            "raw": {
                                "language": "json"
                            }
                        }
                    },
                    "url": {
                        "raw": "{{trelloUrl}}/1/boards/{{boardId}}?key={{key}}&token={{trelloToken}}",
                        "host": [
                            "{{trelloUrl}}"
                        ],
                        "path": [
                            "1",
                            "boards",
                            "{{boardId}}"
                        ],
                        "query": [
                            {
                                "key": "key",
                                "value": "{{key}}"
                            },
                            {
                                "key": "token",
                                "value": "{{trelloToken}}"
                            }
                        ]
                    }
                },
                "response": []
            },
            {
                "name": "Delete a board",
                "event": [
                    {
                        "listen": "test",
                        "script": {
                            "exec": [
                                "pm.test(\"Status code is 200\", function () {\r",
                                "    pm.response.to.have.status(200);\r",
                                "});\r",
                                "\r",
                                "pm.test(\"Content-Type is application/json;\", function () {\r",
                                "    pm.response.to.have.header(\"Content-Type\",\"application/json; charset=utf-8\");\r",
                                "});\r",
                                "\r",
                                "pm.test(\"Board was deleted\", function () {\r",
                                "    var jsonData = pm.response.json();\r",
                                "    pm.expect(jsonData._value).to.eql(null);\r",
                                "});"
                            ],
                            "type": "text/javascript",
                            "packages": {}
                        }
                    }
                ],
                "request": {
                    "method": "DELETE",
                    "header": [],
                    "url": {
                        "raw": "{{trelloUrl}}/1/boards/{{boardId}}?key={{key}}&token={{trelloToken}}",
                        "host": [
                            "{{trelloUrl}}"
                        ],
                        "path": [
                            "1",
                            "boards",
                            "{{boardId}}"
                        ],
                        "query": [
                            {
                                "key": "key",
                                "value": "{{key}}"
                            },
                            {
                                "key": "token",
                                "value": "{{trelloToken}}"
                            }
                        ]
                    }
                },
                "response": []
            }
        ],
        "variable": [
            {
                "key": "userName",
                "value": "test_user"
            }
        ]
    },
    environment:{
        "id": "b4eeee67-70b0-4541-b2e1-3539787feaa0",
        "name": "Trello",
        "values": [
            {
                "key": "trelloUrl",
                "value": "https://api.trello.com",
                "type": "default",
                "enabled": true
            },
            {
                "key": "userName",
                "value": "test_user",
                "type": "default",
                "enabled": true
            },
            {
                "key": "key",
                "value": "218440df4371dcd24c154550e3fcde07",
                "type": "default",
                "enabled": true
            },
            {
                "key": "boardName",
                "value": "test",
                "type": "default",
                "enabled": true
            },
            {
                "key": "trelloToken",
                "value": process.env.trelloToken,
                "type": "default",
                "enabled": true
            },
            {
                "key": "boardId",
                "value": "",
                "type": "any",
                "enabled": true
            },
            {
                "key": "token",
                "value": "",
                "type": "any",
                "enabled": true
            }
        ],
        "_postman_variable_scope": "environment",
        "_postman_exported_at": "2024-09-03T09:01:47.613Z",
        "_postman_exported_using": "Postman/11.8.1"
    },
    reporters: 'cli'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
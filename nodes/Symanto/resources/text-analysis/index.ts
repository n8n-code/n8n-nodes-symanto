import type { INodeProperties } from 'n8n-workflow';

export const textAnalysisDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					]
				}
			},
			"options": [
				{
					"name": "Communication",
					"value": "Communication",
					"action": "Communication & Tonality",
					"description": "Identify the purpose and writing style of a written text.\n\nSupported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]\n\nReturned labels:\n* action-seeking\n* fact-oriented\n* information-seeking\n* self-revealing",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communication"
						}
					}
				},
				{
					"name": "Ekman Emotion",
					"value": "Ekman Emotion",
					"action": "Emotion Analysis",
					"description": "Detect the emotions of the text based on Ekman.\n\nSupported Langauges: [`en`, `de`, `es`]\n\nReturned labels:\n* anger\n* disgust\n* fear\n* joy\n* sadness\n* surprise\n* no-emotion",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ekman-emotion"
						}
					}
				},
				{
					"name": "Emotion",
					"value": "Emotion",
					"action": "Emotion Analysis",
					"description": "Detect the emotions of the text.\n\nSupported Langauges: [`en`, `de`, `es`]\n\nReturned labels:\n* anger\n* joy\n* love\n* sadness\n* surprise\n* uncategorized",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/emotion"
						}
					}
				},
				{
					"name": "Language Detection",
					"value": "Language Detection",
					"action": "Language Detection",
					"description": "Identifies what language a text is written in. Only languages that our API supports can be analyzed.\n\nReturned labels:\n* language_code of the detected language",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/language-detection"
						}
					}
				},
				{
					"name": "Personality",
					"value": "Personality",
					"action": "Personality Traits",
					"description": "Predict the personality trait of author of any written text.\n\nSupported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]\n\nReturned labels:\n\n* emotional\n* rational",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/personality"
						}
					}
				},
				{
					"name": "Sentiment",
					"value": "Sentiment",
					"action": "Sentiment Analysis",
					"description": "Evaluate the overall tonality of the text.\n\nSupported Languages: [`en`, `de`, `es`]\n\nReturned labels:\n* positive\n* negative",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sentiment"
						}
					}
				},
				{
					"name": "Topic Sentiment",
					"value": "Topic Sentiment",
					"action": "Extracts topics and sentiments and relates them.",
					"description": "Extracts topics and sentiments and relates them.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/topic-sentiment"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /communication",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Communication"
					]
				}
			}
		},
		{
			"displayName": "All",
			"name": "all",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "all",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Communication"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"id\": \"1\",\n  \"language\": \"en\",\n  \"text\": \"I love the service\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Communication"
					]
				}
			}
		},
		{
			"displayName": "API Key (Header)",
			"name": "security_apikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for apiKeyHeader (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Communication"
					]
				}
			}
		},
		{
			"displayName": "POST /ekman-emotion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Ekman Emotion"
					]
				}
			}
		},
		{
			"displayName": "All",
			"name": "all",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "all",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Ekman Emotion"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"id\": \"1\",\n  \"language\": \"en\",\n  \"text\": \"I love the service\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Ekman Emotion"
					]
				}
			}
		},
		{
			"displayName": "API Key (Header)",
			"name": "security_apikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for apiKeyHeader (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Ekman Emotion"
					]
				}
			}
		},
		{
			"displayName": "POST /emotion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Emotion"
					]
				}
			}
		},
		{
			"displayName": "All",
			"name": "all",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "all",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Emotion"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"id\": \"1\",\n  \"language\": \"en\",\n  \"text\": \"I love the service\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Emotion"
					]
				}
			}
		},
		{
			"displayName": "API Key (Header)",
			"name": "security_apikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for apiKeyHeader (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Emotion"
					]
				}
			}
		},
		{
			"displayName": "POST /language-detection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Language Detection"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Language Detection"
					]
				}
			}
		},
		{
			"displayName": "API Key (Header)",
			"name": "security_apikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for apiKeyHeader (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Language Detection"
					]
				}
			}
		},
		{
			"displayName": "POST /personality",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Personality"
					]
				}
			}
		},
		{
			"displayName": "All",
			"name": "all",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "all",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Personality"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"id\": \"1\",\n  \"language\": \"en\",\n  \"text\": \"I love the service\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Personality"
					]
				}
			}
		},
		{
			"displayName": "API Key (Header)",
			"name": "security_apikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for apiKeyHeader (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Personality"
					]
				}
			}
		},
		{
			"displayName": "POST /sentiment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Sentiment"
					]
				}
			}
		},
		{
			"displayName": "All",
			"name": "all",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "all",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Sentiment"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"id\": \"1\",\n  \"language\": \"en\",\n  \"text\": \"I love the service\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Sentiment"
					]
				}
			}
		},
		{
			"displayName": "API Key (Header)",
			"name": "security_apikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for apiKeyHeader (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Sentiment"
					]
				}
			}
		},
		{
			"displayName": "POST /topic-sentiment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Topic Sentiment"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"description": "Provide analysis domain for better extraction (optional)",
			"default": "Ecom",
			"type": "options",
			"options": [
				{
					"name": "Ecom",
					"value": "Ecom"
				},
				{
					"name": "Employee",
					"value": "Employee"
				},
				{
					"name": "Hotel",
					"value": "Hotel"
				},
				{
					"name": "Restaurant",
					"value": "Restaurant"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "domain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Topic Sentiment"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"id\": \"1\",\n  \"language\": \"en\",\n  \"text\": \"I love the service\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Topic Sentiment"
					]
				}
			}
		},
		{
			"displayName": "API Key (Header)",
			"name": "security_apikeyheader",
			"type": "string",
			"default": "",
			"description": "API key for apiKeyHeader (header: x-api-key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"x-api-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Text Analysis"
					],
					"operation": [
						"Topic Sentiment"
					]
				}
			}
		},
];

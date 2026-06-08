import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { textAnalysisDescription } from './resources/text-analysis';

export class Symanto implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'symanto',
		name: 'N8nDevSymanto',
		icon: { light: 'file:./symanto.svg', dark: 'file:./symanto.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'We aim to provide the deepest understanding of people through psychology & AI',
		defaults: { name: 'symanto' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevSymantoApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Text Analysis",
					"value": "Text Analysis",
					"description": ""
				}
			],
			"default": ""
		},
		...textAnalysisDescription
		],
	};
}

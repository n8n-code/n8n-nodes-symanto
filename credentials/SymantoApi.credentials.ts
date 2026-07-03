import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class SymantoApi implements ICredentialType {
        name = 'N8nDevSymantoApi';

        displayName = 'Symanto API';

        icon: Icon = { light: 'file:../nodes/Symanto/symanto.svg', dark: 'file:../nodes/Symanto/symanto.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.symanto.net',
                        required: true,
                        placeholder: 'https://api.symanto.net',
                        description: 'The base URL of your Symanto API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'x-api-key': '={{$credentials.apiKey}}',
                        },
                },
        };


}

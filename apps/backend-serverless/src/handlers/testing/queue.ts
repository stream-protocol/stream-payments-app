import * as Sentry from '@sentry/serverless';
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { sendPaymentResolveRetryMessage } from '../../services/sqs/sqs-send-message.service.js';

Sentry.AWSLambda.init({
    dsn: 'https://c34ba5e4f2f01d32d5aa43dc6de4da7e@o1252019.ingest.sentry.io/4505730127495168',
    tracesSampleRate: 1.0,
});

export const queue = Sentry.AWSLambda.wrapHandler(
    async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
        try {
            sendPaymentResolveRetryMessage('test');
        } catch (error) {
            console.log(error);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Successfully started step function',
            }),
        };
    },
    {
        rethrowAfterCapture: false,
    }
);

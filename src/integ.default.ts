import * as cdk from 'aws-cdk-lib';
import { AINotificationsChannel, IAINotificationsChannelProp, AiNotificationsChannelType, AiNotificationsDestinationType, AiNotificationsProduct } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'L2-AI-Notifications-Channel-Stack', {
   env: {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
   },
});

let props: IAINotificationsChannelProp =
   {
      channel: {
         name: 'L2-Channel-Stack-Test-Channel',
         product: AiNotificationsProduct.IINT,
         properties: {
            key: 'email',
            value: 'joe@blow.com',
            displayValue: '',
            label: '',
         },
         type: AiNotificationsChannelType.EMAIL,
      },

      destination: {
         name: 'L2-Channel-Stack-Test-Destination',
         properties: {
            key: 'email',
            value: 'joe@blow.com',
            displayValue: '',
            label: '',
         },
         type: AiNotificationsDestinationType.EMAIL,
      },
   };
new AINotificationsChannel(stack, 'L2-AI-Notifications-Channel', props);

app.synth();

# AWS CDK Level 2 Construct for New Relic AI Notifications Channel
This L2 Construct wraps the L1 `@cdk-cloudformation/newrelic-observability-ainotificationsdestination` and `@cdk-cloudformation/newrelic-observability-ainotificationschannel` Constructs in a single L2 Construct.

## Use
```typescript
import * as cdk from 'aws-cdk-lib';
import { AINotificationsChannel, IAINotificationsChannelProp, AiNotificationsChannelType, AiNotificationsDestinationType, AiNotificationsProduct } from '@newrelic/aws-cdk-aiNotificationsChannel';

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
```

## Development
- Developed with [projen](https://github.com/projen/projen)
- Build `yarn build`
- `npm` deploy

## Notes
- https://constructs.dev/contribute
- https://dev.to/aws-builders/a-beginner-s-guide-to-create-aws-cdk-construct-library-with-projen-5eh4
- https://github.com/projen/projen



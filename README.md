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


## Contributing
We encourage your contributions to improve AWS CDK Level 2 Construct for New Relic AI Notifications Channel! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.
If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company,  please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License
AWS CDK Level 2 Construct for New Relic AI Notifications Channel is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.


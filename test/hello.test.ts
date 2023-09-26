import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
   AINotificationsChannel,
   IAINotificationsChannelProp,
   AiNotificationsChannelType,
   AiNotificationsDestinationType,
   AiNotificationsProduct,
   ToGraphQL,
} from '../src';

let prop : IAINotificationsChannelProp =
   {
      channel: {
         name: 'L2 Channel Test Properties',
         product: AiNotificationsProduct.IINT,
         properties: {
            key: 'email',
            value: 'joe@blow',
         },
         type: AiNotificationsChannelType.EMAIL,
      },

      destination: {
         name: 'L2 Channel Test Properties',
         properties: {
            key: 'email',
            value: 'joe@blow',
         },
         type: AiNotificationsDestinationType.EMAIL,
      },
   };
test('Validate property object', () => {
   const expectedResult = 'channel:{name:"L2 Channel Test Properties",product:IINT,properties:{key:"email",value:"joe@blow"},type:EMAIL},destination:{name:"L2 Channel Test Properties",properties:{key:"email",value:"joe@blow"},type:EMAIL}';
   const result = ToGraphQL(prop);
   expect(result).toBe(expectedResult);
   console.log(result);
});

test('Validate Destination object', () => {
   //         destination: {name: "Email destination test", properties: {key: "email", value: "someone@somewhere.com"}, type: EMAIL}
   const expectedResult = 'destination:{name:"L2 Channel Test Properties",properties:{key:"email",value:"joe@blow"},type:EMAIL}';
   const result = ToGraphQL({ destination: prop.destination } );
   console.log(result);
   expect(result).toBe(expectedResult);
});
test('Validate Channel object', () => {
   //         destination: {name: "Email destination test", properties: {key: "email", value: "someone@somewhere.com"}, type: EMAIL}
   const expectedResult = 'channel:{name:"L2 Channel Test Properties",product:IINT,properties:{key:"email",value:"joe@blow"},type:EMAIL}';
   const result = ToGraphQL({ channel: prop.channel } );
   console.log(result);
   expect(result).toBe(expectedResult);
});

test('Validate Channel L2', () => {
   const stack = new cdk.Stack();
   new AINotificationsChannel(stack, 'L2 Channel Test Stack', prop);
   const template = Template.fromStack(stack);
   console.log(JSON.stringify(template));
   template.resourceCountIs('NewRelic::Observability::AINotificationsDestination', 1);
   template.resourceCountIs('NewRelic::Observability::AINotificationsChannel', 1);
});
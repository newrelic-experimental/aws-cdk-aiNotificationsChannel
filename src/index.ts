import { CfnAiNotificationsChannel } from '@cdk-cloudformation/newrelic-observability-ainotificationschannel';
import { CfnAiNotificationsDestination } from '@cdk-cloudformation/newrelic-observability-ainotificationsdestination';
import { CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/** https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-notifications/notification-channels-control-where-send-alerts/#view-channels */
export enum AiNotificationsChannelType {
   EMAIL = 'EMAIL',
   EVENT_BRIDGE = 'EVENT_BRIDGE',
   JIRA_CLASSIC = 'JIRA_CLASSIC',
   JIRA_NEXTGEN = 'JIRA_NEXTGEN',
   MOBILE_PUSH = 'MOBILE_PUSH',
   PAGERDUTY_ACCOUNT_INTEGRATION = 'PAGERDUTY_ACCOUNT_INTEGRATION',
   PAGERDUTY_SERVICE_INTEGRATION = 'PAGERDUTY_SERVICE_INTEGRATION',
   SERVICENOW_EVENTS = 'SERVICENOW_EVENTS',
   SERVICENOW_INCIDENTS = 'SERVICENOW_INCIDENTS',
   SERVICE_NOW_APP = 'SERVICE_NOW_APP',
   SLACK = 'SLACK',
   SLACK_COLLABORATION = 'SLACK_COLLABORATION',
   SLACK_LEGACY = 'SLACK_LEGACY',
   WEBHOOK = 'WEBHOOK'
}

/** https://docs.newrelic.com/docs/alerts-applied-intelligence/notifications/destinations/ */
export enum AiNotificationsDestinationType {
   EMAIL = 'EMAIL',
   EVENT_BRIDGE = 'EVENT_BRIDGE',
   JIRA = 'JIRA',
   MOBILE_PUSH = 'MOBILE_PUSH',
   PAGERDUTY_ACCOUNT_INTEGRATION = 'PAGERDUTY_ACCOUNT_INTEGRATION',
   PAGERDUTY_SERVICE_INTEGRATION = 'PAGERDUTY_SERVICE_INTEGRATION',
   SERVICE_NOW = 'SERVICE_NOW',
   SERVICE_NOW_APP = 'SERVICE_NOW_APP',
   SLACK = 'SLACK',
   SLACK_COLLABORATION = 'SLACK_COLLABORATION',
   SLACK_LEGACY = 'SLACK_LEGACY',
   WEBHOOK = 'WEBHOOK'
}

export enum AiNotificationsProduct {
   ALERTS = 'ALERTS',
   APM = 'APM',
   CHANGE_TRACKING = 'CHANGE_TRACKING',
   CSSP = 'CSSP',
   DISCUSSIONS = 'DISCUSSIONS',
   ERROR_TRACKING = 'ERROR_TRACKING',
   IINT = 'IINT',
   NTFC = 'NTFC',
   PD = 'PD',
   SECURITY = 'SECURITY',
   SHARING = 'SHARING'
}

export interface Properties{
   /** Optional display value */
   readonly displayValue?: string;
   /** Optional UI label */
   readonly label?: string;
   readonly key: string;
   readonly value: string;
}
export interface IChannel {
   /** Used internally, do not set */
   destinationId?: string;
   /** Channel's name */
   readonly name: string;
   product: AiNotificationsProduct;
   readonly properties: Properties;
   type: AiNotificationsChannelType;
}

export interface IDestination {
   /** Destination's name */
   readonly name: string;
   readonly properties: Properties;
   type: AiNotificationsDestinationType;
}

export interface IAINotificationsChannelProp {
   /** The Channel to create */
   channel: IChannel;
   /** The Destination to create and link to the created Channel */
   destination: IDestination;
}

export class AINotificationsChannel extends Construct {
   constructor(scope: Construct, id: string, props: IAINotificationsChannelProp) {
      super(scope, id);

      const destinationFragment = ToGraphQL({ destination: props.destination });
      const destination = new CfnAiNotificationsDestination(this, 'L2 AINotificationsChannel Destination', { destination: destinationFragment });
      new CfnOutput(this, 'DestinationId', {
         exportName: 'DestinationId',
         value: destination.attrId,
      });

      props.channel.destinationId = destination.ref;
      const channelFragment = ToGraphQL({ channel: props.channel });
      const channel = new CfnAiNotificationsChannel(this, 'L2 AINotificationsChannel Channel', { channel: channelFragment });

      new CfnOutput(this, 'ChannelId', {
         exportName: 'ChannelId',
         value: channel.attrId,
      });
   }
}

export function ToGraphQL(obj: any):string {
   // GraphQL keys (attributes) are not quoted
   let graphQL = JSON.stringify(obj).replace(/\"([\w_-]+?)\"\:/g, '$1:');

   // Drop trailing curly brace
   graphQL = graphQL
      .substring(0, graphQL.lastIndexOf('}'))
      .replace('{', '');

   // Enum fix-up
   // const enums = [/type:"(.*?)"/gm, /product:"(.*?)"/gm];
   graphQL = graphQL.replace(/type:"(.*?)"/gm, 'type:$1');
   graphQL = graphQL.replace(/product:"(.*?)"/gm, 'product:$1');
   return graphQL;
}
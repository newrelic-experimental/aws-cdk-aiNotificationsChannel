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



# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AINotificationsChannel <a name="AINotificationsChannel" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel"></a>

#### Initializers <a name="Initializers" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.Initializer"></a>

```typescript
import { AINotificationsChannel } from '@newrelic/aws-cdk-aiNotificationsChannel'

new AINotificationsChannel(scope: Construct, id: string, props: IAINotificationsChannelProp)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.Initializer.parameter.props">props</a></code> | <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IAINotificationsChannelProp">IAINotificationsChannelProp</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.Initializer.parameter.props"></a>

- *Type:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.IAINotificationsChannelProp">IAINotificationsChannelProp</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.isConstruct"></a>

```typescript
import { AINotificationsChannel } from '@newrelic/aws-cdk-aiNotificationsChannel'

AINotificationsChannel.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@newrelic/aws-cdk-aiNotificationsChannel.AINotificationsChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### Properties <a name="Properties" id="@newrelic/aws-cdk-aiNotificationsChannel.Properties"></a>

#### Initializer <a name="Initializer" id="@newrelic/aws-cdk-aiNotificationsChannel.Properties.Initializer"></a>

```typescript
import { Properties } from '@newrelic/aws-cdk-aiNotificationsChannel'

const properties: Properties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.Properties.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.Properties.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.Properties.property.displayValue">displayValue</a></code> | <code>string</code> | Optional display value. |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.Properties.property.label">label</a></code> | <code>string</code> | Optional UI label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@newrelic/aws-cdk-aiNotificationsChannel.Properties.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@newrelic/aws-cdk-aiNotificationsChannel.Properties.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `displayValue`<sup>Optional</sup> <a name="displayValue" id="@newrelic/aws-cdk-aiNotificationsChannel.Properties.property.displayValue"></a>

```typescript
public readonly displayValue: string;
```

- *Type:* string

Optional display value.

---

##### `label`<sup>Optional</sup> <a name="label" id="@newrelic/aws-cdk-aiNotificationsChannel.Properties.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Optional UI label.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAINotificationsChannelProp <a name="IAINotificationsChannelProp" id="@newrelic/aws-cdk-aiNotificationsChannel.IAINotificationsChannelProp"></a>

- *Implemented By:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.IAINotificationsChannelProp">IAINotificationsChannelProp</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IAINotificationsChannelProp.property.channel">channel</a></code> | <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IChannel">IChannel</a></code> | The Channel to create. |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IAINotificationsChannelProp.property.destination">destination</a></code> | <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IDestination">IDestination</a></code> | The Destination to create and link to the created Channel. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@newrelic/aws-cdk-aiNotificationsChannel.IAINotificationsChannelProp.property.channel"></a>

```typescript
public readonly channel: IChannel;
```

- *Type:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.IChannel">IChannel</a>

The Channel to create.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@newrelic/aws-cdk-aiNotificationsChannel.IAINotificationsChannelProp.property.destination"></a>

```typescript
public readonly destination: IDestination;
```

- *Type:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.IDestination">IDestination</a>

The Destination to create and link to the created Channel.

---

### IChannel <a name="IChannel" id="@newrelic/aws-cdk-aiNotificationsChannel.IChannel"></a>

- *Implemented By:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.IChannel">IChannel</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.name">name</a></code> | <code>string</code> | Channel's name. |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.properties">properties</a></code> | <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.Properties">Properties</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.product">product</a></code> | <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct">AiNotificationsProduct</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.type">type</a></code> | <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType">AiNotificationsChannelType</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.destinationId">destinationId</a></code> | <code>string</code> | Used internally, do not set. |

---

##### `name`<sup>Required</sup> <a name="name" id="@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Channel's name.

---

##### `properties`<sup>Required</sup> <a name="properties" id="@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.properties"></a>

```typescript
public readonly properties: Properties;
```

- *Type:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.Properties">Properties</a>

---

##### `product`<sup>Required</sup> <a name="product" id="@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.product"></a>

```typescript
public readonly product: AiNotificationsProduct;
```

- *Type:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct">AiNotificationsProduct</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.type"></a>

```typescript
public readonly type: AiNotificationsChannelType;
```

- *Type:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType">AiNotificationsChannelType</a>

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@newrelic/aws-cdk-aiNotificationsChannel.IChannel.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

Used internally, do not set.

---

### IDestination <a name="IDestination" id="@newrelic/aws-cdk-aiNotificationsChannel.IDestination"></a>

- *Implemented By:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.IDestination">IDestination</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IDestination.property.name">name</a></code> | <code>string</code> | Destination's name. |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IDestination.property.properties">properties</a></code> | <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.Properties">Properties</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.IDestination.property.type">type</a></code> | <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType">AiNotificationsDestinationType</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@newrelic/aws-cdk-aiNotificationsChannel.IDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Destination's name.

---

##### `properties`<sup>Required</sup> <a name="properties" id="@newrelic/aws-cdk-aiNotificationsChannel.IDestination.property.properties"></a>

```typescript
public readonly properties: Properties;
```

- *Type:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.Properties">Properties</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@newrelic/aws-cdk-aiNotificationsChannel.IDestination.property.type"></a>

```typescript
public readonly type: AiNotificationsDestinationType;
```

- *Type:* <a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType">AiNotificationsDestinationType</a>

---

## Enums <a name="Enums" id="Enums"></a>

### AiNotificationsChannelType <a name="AiNotificationsChannelType" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType"></a>

https://docs.newrelic.com/docs/alerts-applied-intelligence/new-relic-alerts/alert-notifications/notification-channels-control-where-send-alerts/#view-channels.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.EMAIL">EMAIL</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.EVENT_BRIDGE">EVENT_BRIDGE</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.JIRA_CLASSIC">JIRA_CLASSIC</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.JIRA_NEXTGEN">JIRA_NEXTGEN</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.MOBILE_PUSH">MOBILE_PUSH</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.PAGERDUTY_ACCOUNT_INTEGRATION">PAGERDUTY_ACCOUNT_INTEGRATION</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.PAGERDUTY_SERVICE_INTEGRATION">PAGERDUTY_SERVICE_INTEGRATION</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SERVICENOW_EVENTS">SERVICENOW_EVENTS</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SERVICENOW_INCIDENTS">SERVICENOW_INCIDENTS</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SERVICE_NOW_APP">SERVICE_NOW_APP</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SLACK">SLACK</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SLACK_COLLABORATION">SLACK_COLLABORATION</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SLACK_LEGACY">SLACK_LEGACY</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.WEBHOOK">WEBHOOK</a></code> | *No description.* |

---

##### `EMAIL` <a name="EMAIL" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.EMAIL"></a>

---


##### `EVENT_BRIDGE` <a name="EVENT_BRIDGE" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.EVENT_BRIDGE"></a>

---


##### `JIRA_CLASSIC` <a name="JIRA_CLASSIC" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.JIRA_CLASSIC"></a>

---


##### `JIRA_NEXTGEN` <a name="JIRA_NEXTGEN" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.JIRA_NEXTGEN"></a>

---


##### `MOBILE_PUSH` <a name="MOBILE_PUSH" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.MOBILE_PUSH"></a>

---


##### `PAGERDUTY_ACCOUNT_INTEGRATION` <a name="PAGERDUTY_ACCOUNT_INTEGRATION" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.PAGERDUTY_ACCOUNT_INTEGRATION"></a>

---


##### `PAGERDUTY_SERVICE_INTEGRATION` <a name="PAGERDUTY_SERVICE_INTEGRATION" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.PAGERDUTY_SERVICE_INTEGRATION"></a>

---


##### `SERVICENOW_EVENTS` <a name="SERVICENOW_EVENTS" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SERVICENOW_EVENTS"></a>

---


##### `SERVICENOW_INCIDENTS` <a name="SERVICENOW_INCIDENTS" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SERVICENOW_INCIDENTS"></a>

---


##### `SERVICE_NOW_APP` <a name="SERVICE_NOW_APP" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SERVICE_NOW_APP"></a>

---


##### `SLACK` <a name="SLACK" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SLACK"></a>

---


##### `SLACK_COLLABORATION` <a name="SLACK_COLLABORATION" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SLACK_COLLABORATION"></a>

---


##### `SLACK_LEGACY` <a name="SLACK_LEGACY" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.SLACK_LEGACY"></a>

---


##### `WEBHOOK` <a name="WEBHOOK" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsChannelType.WEBHOOK"></a>

---


### AiNotificationsDestinationType <a name="AiNotificationsDestinationType" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType"></a>

https://docs.newrelic.com/docs/alerts-applied-intelligence/notifications/destinations/.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.EMAIL">EMAIL</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.EVENT_BRIDGE">EVENT_BRIDGE</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.JIRA">JIRA</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.MOBILE_PUSH">MOBILE_PUSH</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.PAGERDUTY_ACCOUNT_INTEGRATION">PAGERDUTY_ACCOUNT_INTEGRATION</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.PAGERDUTY_SERVICE_INTEGRATION">PAGERDUTY_SERVICE_INTEGRATION</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SERVICE_NOW">SERVICE_NOW</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SERVICE_NOW_APP">SERVICE_NOW_APP</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SLACK">SLACK</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SLACK_COLLABORATION">SLACK_COLLABORATION</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SLACK_LEGACY">SLACK_LEGACY</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.WEBHOOK">WEBHOOK</a></code> | *No description.* |

---

##### `EMAIL` <a name="EMAIL" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.EMAIL"></a>

---


##### `EVENT_BRIDGE` <a name="EVENT_BRIDGE" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.EVENT_BRIDGE"></a>

---


##### `JIRA` <a name="JIRA" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.JIRA"></a>

---


##### `MOBILE_PUSH` <a name="MOBILE_PUSH" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.MOBILE_PUSH"></a>

---


##### `PAGERDUTY_ACCOUNT_INTEGRATION` <a name="PAGERDUTY_ACCOUNT_INTEGRATION" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.PAGERDUTY_ACCOUNT_INTEGRATION"></a>

---


##### `PAGERDUTY_SERVICE_INTEGRATION` <a name="PAGERDUTY_SERVICE_INTEGRATION" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.PAGERDUTY_SERVICE_INTEGRATION"></a>

---


##### `SERVICE_NOW` <a name="SERVICE_NOW" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SERVICE_NOW"></a>

---


##### `SERVICE_NOW_APP` <a name="SERVICE_NOW_APP" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SERVICE_NOW_APP"></a>

---


##### `SLACK` <a name="SLACK" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SLACK"></a>

---


##### `SLACK_COLLABORATION` <a name="SLACK_COLLABORATION" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SLACK_COLLABORATION"></a>

---


##### `SLACK_LEGACY` <a name="SLACK_LEGACY" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.SLACK_LEGACY"></a>

---


##### `WEBHOOK` <a name="WEBHOOK" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsDestinationType.WEBHOOK"></a>

---


### AiNotificationsProduct <a name="AiNotificationsProduct" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.ALERTS">ALERTS</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.APM">APM</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.CHANGE_TRACKING">CHANGE_TRACKING</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.CSSP">CSSP</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.DISCUSSIONS">DISCUSSIONS</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.ERROR_TRACKING">ERROR_TRACKING</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.IINT">IINT</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.NTFC">NTFC</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.PD">PD</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.SECURITY">SECURITY</a></code> | *No description.* |
| <code><a href="#@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.SHARING">SHARING</a></code> | *No description.* |

---

##### `ALERTS` <a name="ALERTS" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.ALERTS"></a>

---


##### `APM` <a name="APM" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.APM"></a>

---


##### `CHANGE_TRACKING` <a name="CHANGE_TRACKING" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.CHANGE_TRACKING"></a>

---


##### `CSSP` <a name="CSSP" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.CSSP"></a>

---


##### `DISCUSSIONS` <a name="DISCUSSIONS" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.DISCUSSIONS"></a>

---


##### `ERROR_TRACKING` <a name="ERROR_TRACKING" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.ERROR_TRACKING"></a>

---


##### `IINT` <a name="IINT" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.IINT"></a>

---


##### `NTFC` <a name="NTFC" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.NTFC"></a>

---


##### `PD` <a name="PD" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.PD"></a>

---


##### `SECURITY` <a name="SECURITY" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.SECURITY"></a>

---


##### `SHARING` <a name="SHARING" id="@newrelic/aws-cdk-aiNotificationsChannel.AiNotificationsProduct.SHARING"></a>

---


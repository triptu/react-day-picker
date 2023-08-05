---
id: "CustomComponents"
title: "Interface: CustomComponents"
sidebar_label: "CustomComponents"
sidebar_position: 0
custom_edit_url: null
---

Map of the components that can be changed using the `components` prop.

Look at the [components
source](https://github.com/gpbl/react-day-picker/tree/main/src/components)
to understand how internal components are built.

## Properties

### Caption

• `Optional` **Caption**: (`props`: [`CaptionProps`](/api/interfaces/CaptionProps.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the caption element.

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CaptionProps`](/api/interfaces/CaptionProps.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:318](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L318)

___

### CaptionLabel

• `Optional` **CaptionLabel**: (`props`: [`CaptionLabelProps`](/api/interfaces/CaptionLabelProps.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the caption element.

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CaptionLabelProps`](/api/interfaces/CaptionLabelProps.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:320](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L320)

___

### Day

• `Optional` **Day**: (`props`: [`DayProps`](/api/interfaces/DayProps.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the day element.

Each `Day` in DayPicker should render one of the following, according to
the return value of [useDayRender](/api/functions/useDayRender.md).

- an empty `React.Fragment`, to render if `isHidden` is true
- a `button` element, when the day is interactive, e.g. is selectable
- a `div` or a `span` element, when the day is not interactive

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DayProps`](/api/interfaces/DayProps.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:332](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L332)

___

### DayContent

• `Optional` **DayContent**: (`props`: [`DayContentProps`](/api/interfaces/DayContentProps.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the content of the day element.

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DayContentProps`](/api/interfaces/DayContentProps.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:334](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L334)

___

### Dropdown

• `Optional` **Dropdown**: (`props`: [`DropdownProps`](/api/interfaces/DropdownProps.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the drop-down elements.

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DropdownProps`](/api/interfaces/DropdownProps.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:336](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L336)

___

### Footer

• `Optional` **Footer**: (`props`: [`FooterProps`](/api/interfaces/FooterProps.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the table footer.

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FooterProps`](/api/interfaces/FooterProps.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:338](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L338)

___

### Head

• `Optional` **Head**: () => ``null`` \| `Element`

#### Type declaration

▸ (): ``null`` \| `Element`

The component for the table’s head.

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:340](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L340)

___

### HeadRow

• `Optional` **HeadRow**: () => ``null`` \| `Element`

#### Type declaration

▸ (): ``null`` \| `Element`

The component for the table’s head row.

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:342](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L342)

___

### IconDropdown

• `Optional` **IconDropdown**: (`props`: [`StyledComponent`](/api/types/StyledComponent.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the small icon in the drop-downs.

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`StyledComponent`](/api/types/StyledComponent.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:344](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L344)

___

### IconLeft

• `Optional` **IconLeft**: (`props`: [`StyledComponent`](/api/types/StyledComponent.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The arrow left icon (used for the Navigation buttons).

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`StyledComponent`](/api/types/StyledComponent.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:348](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L348)

___

### IconRight

• `Optional` **IconRight**: (`props`: [`StyledComponent`](/api/types/StyledComponent.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The arrow right icon (used for the Navigation buttons).

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`StyledComponent`](/api/types/StyledComponent.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:346](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L346)

___

### Row

• `Optional` **Row**: (`props`: [`RowProps`](/api/interfaces/RowProps.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the table rows.

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RowProps`](/api/interfaces/RowProps.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:350](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L350)

___

### WeekNumber

• `Optional` **WeekNumber**: (`props`: [`WeekNumberProps`](/api/interfaces/WeekNumberProps.md)) => ``null`` \| `Element`

#### Type declaration

▸ (`props`): ``null`` \| `Element`

The component for the week number in the table rows.

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WeekNumberProps`](/api/interfaces/WeekNumberProps.md) |

##### Returns

``null`` \| `Element`

#### Defined in

[src/types/DayPickerBase.ts:352](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L352)

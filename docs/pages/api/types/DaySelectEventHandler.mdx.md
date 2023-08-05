---
id: "DaySelectEventHandler"
title: "Type alias: DaySelectEventHandler<TMode>"
sidebar_label: "DaySelectEventHandler"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **DaySelectEventHandler**<`TMode`\>: (`days`: [`DayPickerSelectedValue`](/api/types/DayPickerSelectedValue.md)<`TMode`\>, `selectedDay`: `Date`, `state`: [`MatchingModifiers`](/api/types/MatchingModifiers.md), `e`: `React.MouseEvent`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TMode` | extends [`DaysSelectionMode`](/api/types/DaysSelectionMode.md) |

#### Type declaration

▸ (`days`, `selectedDay`, `state`, `e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `days` | [`DayPickerSelectedValue`](/api/types/DayPickerSelectedValue.md)<`TMode`\> |
| `selectedDay` | `Date` |
| `state` | [`MatchingModifiers`](/api/types/MatchingModifiers.md) |
| `e` | `React.MouseEvent` |

##### Returns

`void`

#### Defined in

[src/types/events.ts:7](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/types/events.ts#L7)

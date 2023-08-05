---
id: "DayPickerSelectedValue"
title: "Type alias: DayPickerSelectedValue<TMode>"
sidebar_label: "DayPickerSelectedValue"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **DayPickerSelectedValue**<`TMode`\>: [`TMode`] extends [``"single"``] ? `Date` \| `undefined` : [`TMode`] extends [``"multi"``] ? `Date`[] : [`TMode`] extends [``"range"``] ? [`DateRange`](/api/types/DateRange.md) : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TMode` | extends [`DaysSelectionMode`](/api/types/DaysSelectionMode.md) \| `unknown` |

#### Defined in

[src/DayPicker.tsx:34](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/DayPicker.tsx#L34)

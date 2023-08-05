---
id: "DayPickerPropXs"
title: "Type alias: DayPickerPropXs<TMode>"
sidebar_label: "DayPickerPropXs"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **DayPickerPropXs**<`TMode`\>: [`DayPickerBaseProps`](/api/interfaces/DayPickerBaseProps.md) & [`TMode`] extends [``"none"``] ? [`DayPickerNoneProps`](/api/interfaces/DayPickerNoneProps.md) : [`TMode`] extends [``"single"``] ? [`DayPickerSingleProps`](/api/interfaces/DayPickerSingleProps.md) : [`TMode`] extends [``"multi"``] ? [`DayPickerMultiProps`](/api/interfaces/DayPickerMultiProps.md) : [`TMode`] extends [``"range"``] ? [`DayPickerRangeProps`](/api/interfaces/DayPickerRangeProps.md) : [`DayPickerNoneProps`](/api/interfaces/DayPickerNoneProps.md)

The props for the [DayPicker](/api/functions/DayPicker.md) component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TMode` | extends [`DaysSelectionMode`](/api/types/DaysSelectionMode.md) = ``"none"`` |

#### Defined in

[src/DayPicker.tsx:359](https://github.com/gpbl/react-day-picker/blob/8bed09d2c/src/DayPicker.tsx#L359)

---
id: "useControlledValue"
title: "Function: useControlledValue"
sidebar_label: "useControlledValue"
sidebar_position: 0
custom_edit_url: null
---

▸ **useControlledValue**<`T`\>(`defaultValue`, `controlledValue`): [`T`, [`DispatchStateAction`](/api/types/DispatchStateAction.md)<`T`\>]

Helper hook for using controlled/uncontrolled values from a component props.

When the value is not controlled, pass `undefined` as `controlledValue` and
use the returned setter to update it.

When the value is controlled, pass the controlled value as second
argument, which will be always returned as `value`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | `T` |
| `controlledValue` | `undefined` \| `T` |

#### Returns

[`T`, [`DispatchStateAction`](/api/types/DispatchStateAction.md)<`T`\>]

#### Defined in

[src/hooks/useControlledValue/useControlledValue.ts:14](https://github.com/gpbl/react-day-picker/blob/8bed09d2c/src/hooks/useControlledValue/useControlledValue.ts#L14)

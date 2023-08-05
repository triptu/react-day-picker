---
id: "useDayRender"
title: "Function: useDayRender"
sidebar_label: "useDayRender"
sidebar_position: 0
custom_edit_url: null
---

▸ **useDayRender**(`day`, `displayMonth`, `buttonRef`): [`DayRender`](/api/types/DayRender.md)

Return props and data used to render the [Day](/api/functions/Day.md) component.

Use this hook when creating a component to replace the built-in `Day`
component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `day` | `Date` | The date to render. |
| `displayMonth` | `Date` | The month where the date is displayed (if not the same as `date`, it means it is an "outside" day). |
| `buttonRef` | `RefObject`<`HTMLButtonElement`\> | A ref to the button element that will be target of focus when rendered (if required). |

#### Returns

[`DayRender`](/api/types/DayRender.md)

#### Defined in

[src/hooks/useDayRender/useDayRender.tsx:43](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/hooks/useDayRender/useDayRender.tsx#L43)

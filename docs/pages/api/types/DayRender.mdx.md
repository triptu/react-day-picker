---
id: "DayRender"
title: "Type alias: DayRender"
sidebar_label: "DayRender"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **DayRender**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `activeModifiers` | [`ActiveModifiers`](/api/types/ActiveModifiers.md) | The modifiers active for the given day. |
| `buttonProps` | [`StyledComponent`](/api/types/StyledComponent.md) & `Pick`<[`ButtonProps`](/api/types/ButtonProps.md), ``"disabled"`` \| ``"aria-selected"`` \| ``"tabIndex"``\> & `DayEventHandlers` | The props to apply to the button element (when `isButton` is true). |
| `divProps` | [`StyledComponent`](/api/types/StyledComponent.md) | The props to apply to the div element (when `isButton` is false). |
| `isButton` | `boolean` | Whether the day should be rendered a `button` instead of a `div` |
| `isHidden` | `boolean` | Whether the day should be hidden. |
| `selectedDays` | `SelectedDays` | - |

#### Defined in

[src/hooks/useDayRender/useDayRender.tsx:21](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/hooks/useDayRender/useDayRender.tsx#L21)

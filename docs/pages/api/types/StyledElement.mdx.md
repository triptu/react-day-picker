---
id: "StyledElement"
title: "Type alias: StyledElement<T>"
sidebar_label: "StyledElement"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **StyledElement**<`T`\>: `Object`

The style (either via class names or via in-line styles) of an element.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` \| `React.CSSProperties` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `button` | `T` | The buttons. |
| `button_icon` | `T` | The icon for the navigation button. |
| `button_reset` | `T` | The style for resetting the buttons. |
| `caption_between` | `T` | The caption when between two months (when `multipleMonths > 2`). |
| `caption_dropdowns` | `T` | The drop-downs container. |
| `caption_end` | `T` | The caption when at the end of a series of months. |
| `caption_label` | `T` | The caption label. |
| `caption_start` | `T` | The caption when at the start of a series of months. |
| `day` | `T` | The day grid cell. |
| `day_disabled` | `T` | The day when disabled. |
| `day_hidden` | `T` | The day when hidden. |
| `day_outside` | `T` | The day when outside the month. |
| `day_range_end` | `T` | The day when at the end of a selected range. |
| `day_range_middle` | `T` | The day in the middle of a selected range: it does not include the "from" and the "to" days. |
| `day_range_start` | `T` | The day when at the start of a selected range. |
| `day_selected` | `T` | The day when selected. |
| `day_today` | `T` | The day when today. |
| `dropdown` | `T` | The drop-down (select) element. |
| `dropdown_icon` | `T` | The drop-down icon. |
| `dropdown_month` | `T` | The drop-down to change the month. |
| `dropdown_year` | `T` | The drop-down to change the year. |
| `footer` | `T` | The footer when today. |
| `month_caption` | `T` | The caption (showing the calendar heading and the navigation) |
| `month_grid` | `T` | The grid displaying the month. |
| `month_grid_wrapper` | `T` | The container of the grid displaying the month and the month caption. |
| `month_rowgroup` | `T` | The row grouping the week rows in the month grid. |
| `months_wrapper` | `T` | The months wrapper. |
| `multiple_months` | `T` | The root element when `numberOfMonths > 1`. |
| `nav` | `T` | The navigation container. |
| `nav_button` | `T` | The navigation button. |
| `nav_button_next` | `T` | The "next month" navigation button. |
| `nav_button_previous` | `T` | The "previous month" navigation button. |
| `root` | `T` | The calendar element (root). |
| `vhidden` | `T` | The style of an element visually hidden. |
| `week_row` | `T` | The row with the week. |
| `weekday_columnheader` | `T` | The weekday column header. |
| `weekdays_row` | `T` | The row with the weekday column headers. |
| `weeknumber` | `T` | The weeknumber displayed in the column. |
| `weeknumber_rowheader` | `T` | The cell containing the weeknumber row header. |
| `with_weeknumber` | `T` | The root element when `showWeekNumber={true}`. |

#### Defined in

[src/types/styles.ts:6](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/types/styles.ts#L6)

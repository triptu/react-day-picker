---
id: "DayPickerMultipleProps"
title: "Interface: DayPickerMultipleProps"
sidebar_label: "DayPickerMultipleProps"
sidebar_position: 0
custom_edit_url: null
---

The props for the [DayPicker](/api/functions/DayPicker.md) component when using `mode="multiple"`.

## Hierarchy

- [`DayPickerBase`](/api/interfaces/DayPickerBase.md)

  ↳ **`DayPickerMultipleProps`**

## Properties

### ISOWeek

• `Optional` **ISOWeek**: `boolean`

Use ISO week dates instead of the locale setting. See also
https://en.wikipedia.org/wiki/ISO_week_date.

Setting this prop will ignore [weekStartsOn](/api/interfaces/DayPickerContextValue.md#weekstartson) and [firstWeekContainsDate](/api/interfaces/DayPickerContextValue.md#firstweekcontainsdate).

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[ISOWeek](/api/interfaces/DayPickerBase.md#isoweek)

#### Defined in

[src/types/DayPickerBase.ts:217](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L217)

___

### captionLayout

• `Optional` **captionLayout**: [`CaptionLayout`](/api/types/CaptionLayout.md)

Change the layout of the caption:

- `buttons`: display prev/right buttons
- `dropdown`: display drop-downs to change the month and the year

**Note:** the `dropdown` layout is available only when `fromDate`,
`fromMonth` or`fromYear` and `toDate`, `toMonth` or `toYear` are set.

**`Default Value`**

buttons

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[captionLayout](/api/interfaces/DayPickerBase.md#captionlayout)

#### Defined in

[src/types/DayPickerBase.ts:164](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L164)

___

### className

• `Optional` **className**: `string`

The CSS class to add to the container element. To change the name of the
class instead, use `classNames.root`.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[className](/api/interfaces/DayPickerBase.md#classname)

#### Defined in

[src/types/DayPickerBase.ts:51](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L51)

___

### classNames

• `Optional` **classNames**: `Partial`<[`StyledElement`](/api/types/StyledElement.md)<`string`\>\>

Change the class names of the HTML elements.

Use this prop when you need to change the default class names — for example
when using CSS modules.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[classNames](/api/interfaces/DayPickerBase.md#classnames)

#### Defined in

[src/types/DayPickerBase.ts:58](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L58)

___

### components

• `Optional` **components**: [`CustomComponents`](/api/interfaces/CustomComponents.md)

Map of components used to create the layout. Look at the [components
source](https://github.com/gpbl/react-day-picker/tree/main/src/components)
to understand how internal components are built and provide your custom components.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[components](/api/interfaces/DayPickerBase.md#components)

#### Defined in

[src/types/DayPickerBase.ts:224](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L224)

___

### defaultMonth

• `Optional` **defaultMonth**: `Date`

The initial month to show in the calendar. Use this prop to let DayPicker
control the current month. If you need to set the month programmatically,
use []] and [[onMonthChange](/api/interfaces/DayPickerContextValue.md#month).

**`Default Value`**

The current month

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[defaultMonth](/api/interfaces/DayPickerBase.md#defaultmonth)

#### Defined in

[src/types/DayPickerBase.ts:90](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L90)

___

### dir

• `Optional` **dir**: `string`

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[dir](/api/interfaces/DayPickerBase.md#dir)

#### Defined in

[src/types/DayPickerBase.ts:282](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L282)

___

### disableNavigation

• `Optional` **disableNavigation**: `boolean`

Disable the navigation between months.

**`Default Value`**

false

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[disableNavigation](/api/interfaces/DayPickerBase.md#disablenavigation)

#### Defined in

[src/types/DayPickerBase.ts:137](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L137)

___

### disabled

• `Optional` **disabled**: [`Matcher`](/api/types/Matcher.md) \| [`Matcher`](/api/types/Matcher.md)[]

Apply the `disabled` modifier to the matching days.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[disabled](/api/interfaces/DayPickerBase.md#disabled)

#### Defined in

[src/types/DayPickerBase.ts:243](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L243)

___

### firstWeekContainsDate

• `Optional` **firstWeekContainsDate**: ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7``

The day of January, which is always in the first week of the year. See also
https://date-fns.org/docs/getWeek and
https://en.wikipedia.org/wiki/Week#Numbering

See also [ISOWeek](/api/interfaces/DayPickerContextValue.md#isoweek).

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[firstWeekContainsDate](/api/interfaces/DayPickerBase.md#firstweekcontainsdate)

#### Defined in

[src/types/DayPickerBase.ts:210](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L210)

___

### fixedWeeks

• `Optional` **fixedWeeks**: `boolean`

Display six weeks per months, regardless the month’s number of weeks.
To use this prop, [showOutsideDays](/api/interfaces/DayPickerContextValue.md#showoutsidedays) must be set.

**`Default Value`**

false

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[fixedWeeks](/api/interfaces/DayPickerBase.md#fixedweeks)

#### Defined in

[src/types/DayPickerBase.ts:171](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L171)

___

### footer

• `Optional` **footer**: `ReactNode`

Content to add to the table footer element.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[footer](/api/interfaces/DayPickerBase.md#footer)

#### Defined in

[src/types/DayPickerBase.ts:229](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L229)

___

### formatters

• `Optional` **formatters**: `Partial`<[`Formatters`](/api/types/Formatters.md)\>

A map of formatters. Use the formatters to override the default formatting
functions.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[formatters](/api/interfaces/DayPickerBase.md#formatters)

#### Defined in

[src/types/DayPickerBase.ts:288](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L288)

___

### fromDate

• `Optional` **fromDate**: `Date`

The earliest day to start the month navigation.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[fromDate](/api/interfaces/DayPickerBase.md#fromdate)

#### Defined in

[src/types/DayPickerBase.ts:111](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L111)

___

### fromMonth

• `Optional` **fromMonth**: `Date`

The earliest month to start the month navigation.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[fromMonth](/api/interfaces/DayPickerBase.md#frommonth)

#### Defined in

[src/types/DayPickerBase.ts:119](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L119)

___

### fromYear

• `Optional` **fromYear**: `number`

The earliest year to start the month navigation.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[fromYear](/api/interfaces/DayPickerBase.md#fromyear)

#### Defined in

[src/types/DayPickerBase.ts:127](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L127)

___

### hidden

• `Optional` **hidden**: [`Matcher`](/api/types/Matcher.md) \| [`Matcher`](/api/types/Matcher.md)[]

Apply the `hidden` modifier to the matching days. Will hide them from the
calendar.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[hidden](/api/interfaces/DayPickerBase.md#hidden)

#### Defined in

[src/types/DayPickerBase.ts:248](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L248)

___

### hideHead

• `Optional` **hideHead**: `boolean`

Hide the month’s head displaying the weekday names.

**`Default Value`**

false

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[hideHead](/api/interfaces/DayPickerBase.md#hidehead)

#### Defined in

[src/types/DayPickerBase.ts:177](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L177)

___

### id

• `Optional` **id**: `string`

A unique id to replace the random generated id – used by DayPicker for
accessibility.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[id](/api/interfaces/DayPickerBase.md#id)

#### Defined in

[src/types/DayPickerBase.ts:81](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L81)

___

### initialFocus

• `Optional` **initialFocus**: `boolean`

When a selection mode is set, DayPicker will focus the first selected day
(if set) or the today's date (if not disabled).

Use this prop when you need to focus DayPicker after a user actions, for
improved accessibility.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[initialFocus](/api/interfaces/DayPickerBase.md#initialfocus)

#### Defined in

[src/types/DayPickerBase.ts:238](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L238)

___

### labels

• `Optional` **labels**: `Partial`<[`Labels`](/api/types/Labels.md)\>

Labels creators to override the defaults. Use this prop to customize the
ARIA labels attributes.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[labels](/api/interfaces/DayPickerBase.md#labels)

#### Defined in

[src/types/DayPickerBase.ts:276](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L276)

___

### locale

• `Optional` **locale**: `Locale`

The date-fns locale object used to localize dates.

**`Default Value`**

en-US

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[locale](/api/interfaces/DayPickerBase.md#locale)

#### Defined in

[src/types/DayPickerBase.ts:270](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L270)

___

### max

• `Optional` **max**: `number`

The maximum amount of days that can be selected.

#### Defined in

[src/types/DayPickerMultiple.ts:18](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerMultiple.ts#L18)

___

### min

• `Optional` **min**: `number`

The minimum amount of days that can be selected.

#### Defined in

[src/types/DayPickerMultiple.ts:16](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerMultiple.ts#L16)

___

### mode

• **mode**: ``"multiple"``

#### Defined in

[src/types/DayPickerMultiple.ts:10](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerMultiple.ts#L10)

___

### modifiers

• `Optional` **modifiers**: [`DayModifiers`](/api/types/DayModifiers.md)

Add modifiers to the matching days.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[modifiers](/api/interfaces/DayPickerBase.md#modifiers)

#### Defined in

[src/types/DayPickerBase.ts:263](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L263)

___

### modifiersClassNames

• `Optional` **modifiersClassNames**: [`ModifiersClassNames`](/api/types/ModifiersClassNames.md)

Change the class name for the day matching the [modifiers](/api/interfaces/DayPickerBase.md#modifiers).

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[modifiersClassNames](/api/interfaces/DayPickerBase.md#modifiersclassnames)

#### Defined in

[src/types/DayPickerBase.ts:62](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L62)

___

### modifiersStyles

• `Optional` **modifiersStyles**: [`ModifiersStyles`](/api/types/ModifiersStyles.md)

Change the inline style for the day matching the [modifiers](/api/interfaces/DayPickerBase.md#modifiers).

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[modifiersStyles](/api/interfaces/DayPickerBase.md#modifiersstyles)

#### Defined in

[src/types/DayPickerBase.ts:75](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L75)

___

### month

• `Optional` **month**: `Date`

The month displayed in the calendar.

As opposed to [defaultMonth](/api/interfaces/DayPickerContextValue.md#defaultmonth), use this prop with
[onMonthChange](/api/interfaces/DayPickerContextValue.md#onmonthchange) to change the month programmatically.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[month](/api/interfaces/DayPickerBase.md#month)

#### Defined in

[src/types/DayPickerBase.ts:97](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L97)

___

### numberOfMonths

• `Optional` **numberOfMonths**: `number`

The number of displayed months.

**`Default Value`**

1

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[numberOfMonths](/api/interfaces/DayPickerBase.md#numberofmonths)

#### Defined in

[src/types/DayPickerBase.ts:107](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L107)

___

### onDayBlur

• `Optional` **onDayBlur**: [`DayFocusEventHandler`](/api/types/DayFocusEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayBlur](/api/interfaces/DayPickerBase.md#ondayblur)

#### Defined in

[src/types/DayPickerBase.ts:292](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L292)

___

### onDayClick

• `Optional` **onDayClick**: [`DayClickEventHandler`](/api/types/DayClickEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayClick](/api/interfaces/DayPickerBase.md#ondayclick)

#### Defined in

[src/types/DayPickerBase.ts:290](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L290)

___

### onDayFocus

• `Optional` **onDayFocus**: [`DayFocusEventHandler`](/api/types/DayFocusEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayFocus](/api/interfaces/DayPickerBase.md#ondayfocus)

#### Defined in

[src/types/DayPickerBase.ts:291](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L291)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: [`DayKeyboardEventHandler`](/api/types/DayKeyboardEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayKeyDown](/api/interfaces/DayPickerBase.md#ondaykeydown)

#### Defined in

[src/types/DayPickerBase.ts:295](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L295)

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: [`DayKeyboardEventHandler`](/api/types/DayKeyboardEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayKeyPress](/api/interfaces/DayPickerBase.md#ondaykeypress)

#### Defined in

[src/types/DayPickerBase.ts:297](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L297)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: [`DayKeyboardEventHandler`](/api/types/DayKeyboardEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayKeyUp](/api/interfaces/DayPickerBase.md#ondaykeyup)

#### Defined in

[src/types/DayPickerBase.ts:296](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L296)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: [`DayMouseEventHandler`](/api/types/DayMouseEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayMouseEnter](/api/interfaces/DayPickerBase.md#ondaymouseenter)

#### Defined in

[src/types/DayPickerBase.ts:293](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L293)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: [`DayMouseEventHandler`](/api/types/DayMouseEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayMouseLeave](/api/interfaces/DayPickerBase.md#ondaymouseleave)

#### Defined in

[src/types/DayPickerBase.ts:294](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L294)

___

### onDayPointerEnter

• `Optional` **onDayPointerEnter**: [`DayPointerEventHandler`](/api/types/DayPointerEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayPointerEnter](/api/interfaces/DayPickerBase.md#ondaypointerenter)

#### Defined in

[src/types/DayPickerBase.ts:298](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L298)

___

### onDayPointerLeave

• `Optional` **onDayPointerLeave**: [`DayPointerEventHandler`](/api/types/DayPointerEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayPointerLeave](/api/interfaces/DayPickerBase.md#ondaypointerleave)

#### Defined in

[src/types/DayPickerBase.ts:299](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L299)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: [`DayTouchEventHandler`](/api/types/DayTouchEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayTouchCancel](/api/interfaces/DayPickerBase.md#ondaytouchcancel)

#### Defined in

[src/types/DayPickerBase.ts:300](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L300)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: [`DayTouchEventHandler`](/api/types/DayTouchEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayTouchEnd](/api/interfaces/DayPickerBase.md#ondaytouchend)

#### Defined in

[src/types/DayPickerBase.ts:301](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L301)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: [`DayTouchEventHandler`](/api/types/DayTouchEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayTouchMove](/api/interfaces/DayPickerBase.md#ondaytouchmove)

#### Defined in

[src/types/DayPickerBase.ts:302](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L302)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: [`DayTouchEventHandler`](/api/types/DayTouchEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onDayTouchStart](/api/interfaces/DayPickerBase.md#ondaytouchstart)

#### Defined in

[src/types/DayPickerBase.ts:303](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L303)

___

### onMonthChange

• `Optional` **onMonthChange**: [`MonthChangeEventHandler`](/api/types/MonthChangeEventHandler.md)

Event fired when the user navigates between months.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onMonthChange](/api/interfaces/DayPickerBase.md#onmonthchange)

#### Defined in

[src/types/DayPickerBase.ts:101](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L101)

___

### onNextClick

• `Optional` **onNextClick**: [`MonthChangeEventHandler`](/api/types/MonthChangeEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onNextClick](/api/interfaces/DayPickerBase.md#onnextclick)

#### Defined in

[src/types/DayPickerBase.ts:304](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L304)

___

### onPrevClick

• `Optional` **onPrevClick**: [`MonthChangeEventHandler`](/api/types/MonthChangeEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onPrevClick](/api/interfaces/DayPickerBase.md#onprevclick)

#### Defined in

[src/types/DayPickerBase.ts:305](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L305)

___

### onSelect

• `Optional` **onSelect**: [`SelectMultipleEventHandler`](/api/types/SelectMultipleEventHandler.md)

Event fired when a days added or removed to the selection.

#### Defined in

[src/types/DayPickerMultiple.ts:14](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerMultiple.ts#L14)

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: [`WeekNumberClickEventHandler`](/api/types/WeekNumberClickEventHandler.md)

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[onWeekNumberClick](/api/interfaces/DayPickerBase.md#onweeknumberclick)

#### Defined in

[src/types/DayPickerBase.ts:306](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L306)

___

### pagedNavigation

• `Optional` **pagedNavigation**: `boolean`

Paginate the month navigation displaying the [numberOfMonths](/api/interfaces/DayPickerBase.md#numberofmonths) at
time.

**`Default Value`**

false

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[pagedNavigation](/api/interfaces/DayPickerBase.md#pagednavigation)

#### Defined in

[src/types/DayPickerBase.ts:144](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L144)

___

### reverseMonths

• `Optional` **reverseMonths**: `boolean`

Render the months in reversed order (when [numberOfMonths](/api/interfaces/DayPickerBase.md#numberofmonths) is greater
than `1`) to display the most recent month first.

**`Default Value`**

false

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[reverseMonths](/api/interfaces/DayPickerBase.md#reversemonths)

#### Defined in

[src/types/DayPickerBase.ts:151](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L151)

___

### selected

• `Optional` **selected**: `Date`[]

The selected days.

#### Overrides

[DayPickerBase](/api/interfaces/DayPickerBase.md).[selected](/api/interfaces/DayPickerBase.md#selected)

#### Defined in

[src/types/DayPickerMultiple.ts:12](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerMultiple.ts#L12)

___

### showOutsideDays

• `Optional` **showOutsideDays**: `boolean`

Show the outside days.  An outside day is a day falling in the next or the
previous month.

**`Default Value`**

false

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[showOutsideDays](/api/interfaces/DayPickerBase.md#showoutsidedays)

#### Defined in

[src/types/DayPickerBase.ts:184](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L184)

___

### showWeekNumber

• `Optional` **showWeekNumber**: `boolean`

Show the week numbers column. Weeks are numbered according to the local
week index.

- to use ISO week numbering, use the [ISOWeek](/api/interfaces/DayPickerContextValue.md#isoweek) prop.
- to change how the week numbers are displayed, use the [Formatters](/api/types/Formatters.md) prop.

**`See`**

[ISOWeek](/api/interfaces/DayPickerContextValue.md#isoweek), [weekStartsOn](/api/interfaces/DayPickerContextValue.md#weekstartson) and [firstWeekContainsDate](/api/interfaces/DayPickerContextValue.md#firstweekcontainsdate).

**`Default Value`**

false

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[showWeekNumber](/api/interfaces/DayPickerBase.md#showweeknumber)

#### Defined in

[src/types/DayPickerBase.ts:196](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L196)

___

### style

• `Optional` **style**: `CSSProperties`

Style to apply to the container element.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[style](/api/interfaces/DayPickerBase.md#style)

#### Defined in

[src/types/DayPickerBase.ts:67](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L67)

___

### styles

• `Optional` **styles**: `Partial`<`Omit`<[`StyledElement`](/api/types/StyledElement.md)<`CSSProperties`\>, [`InternalModifiersElement`](/api/types/InternalModifiersElement.md)\>\>

Change the inline styles of the HTML elements.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[styles](/api/interfaces/DayPickerBase.md#styles)

#### Defined in

[src/types/DayPickerBase.ts:71](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L71)

___

### toDate

• `Optional` **toDate**: `Date`

The latest day to end the month navigation.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[toDate](/api/interfaces/DayPickerBase.md#todate)

#### Defined in

[src/types/DayPickerBase.ts:115](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L115)

___

### toMonth

• `Optional` **toMonth**: `Date`

The latest month to end the month navigation.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[toMonth](/api/interfaces/DayPickerBase.md#tomonth)

#### Defined in

[src/types/DayPickerBase.ts:123](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L123)

___

### toYear

• `Optional` **toYear**: `number`

The latest year to end the month navigation.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[toYear](/api/interfaces/DayPickerBase.md#toyear)

#### Defined in

[src/types/DayPickerBase.ts:131](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L131)

___

### today

• `Optional` **today**: `Date`

The today’s date. Default is the current date. This Date will get the
`today` modifier to style the day.

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[today](/api/interfaces/DayPickerBase.md#today)

#### Defined in

[src/types/DayPickerBase.ts:259](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L259)

___

### weekStartsOn

• `Optional` **weekStartsOn**: ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6``

The index of the first day of the week (0 - Sunday). Overrides the locale's one.

See also [ISOWeek](/api/interfaces/DayPickerContextValue.md#isoweek).

#### Inherited from

[DayPickerBase](/api/interfaces/DayPickerBase.md).[weekStartsOn](/api/interfaces/DayPickerBase.md#weekstartson)

#### Defined in

[src/types/DayPickerBase.ts:202](https://github.com/gpbl/react-day-picker/blob/433a4d1e8/src/types/DayPickerBase.ts#L202)

---
id: "DayPickerContext"
title: "Interface: DayPickerContext<TMode>"
sidebar_label: "DayPickerContext"
sidebar_position: 0
custom_edit_url: null
---

The [DayPickerProps](/api/types/DayPickerProps.md) with their default values. Use this type within
internal components to use safe props and avoid all conditionals.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TMode` | extends [`DaysSelectionMode`](/api/types/DaysSelectionMode.md) \| `unknown` |

## Properties

### ISOWeek

• **ISOWeek**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:72](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L72)

___

### captionLayout

• **captionLayout**: [`CaptionLayout`](/api/types/CaptionLayout.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:52](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L52)

___

### className

• **className**: `undefined` \| `string`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:53](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L53)

___

### classNames

• **classNames**: `Required`<{ `button_icon`: `string` ; `button_next`: `string` ; `button_previous`: `string` ; `caption`: `string` ; `caption_between`: `string` ; `caption_dropdowns`: `string` ; `caption_end`: `string` ; `caption_label`: `string` ; `caption_start`: `string` ; `cell`: `string` ; `day`: `string` ; `day_disabled`: `string` ; `day_hidden`: `string` ; `day_outside`: `string` ; `day_range_end`: `string` ; `day_range_middle`: `string` ; `day_range_start`: `string` ; `day_selected`: `string` ; `day_today`: `string` ; `dropdown`: `string` ; `dropdown_icon`: `string` ; `dropdown_month`: `string` ; `dropdown_year`: `string` ; `footer`: `string` ; `head`: `string` ; `head_cell`: `string` ; `head_row`: `string` ; `month_caption`: `string` ; `month_grid`: `string` ; `month_grid_wrapper`: `string` ; `month_rowgroup`: `string` ; `months_wrapper`: `string` ; `multiple_months`: `string` ; `nav`: `string` ; `root`: `string` ; `row`: `string` ; `tbody`: `string` ; `vhidden`: `string` ; `week_row`: `string` ; `weekday_columnheader`: `string` ; `weekdays_row`: `string` ; `weeknumber_rowheader`: `string` ; `with_weeknumber`: `string`  }\>

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:54](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L54)

___

### components

• **components**: `undefined` \| `Partial`<[`CustomComponents`](/api/types/CustomComponents.md)\>

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:55](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L55)

___

### dataAttributes

• **dataAttributes**: [`DataAttributes`](/api/types/DataAttributes.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:56](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L56)

___

### defaultMonth

• **defaultMonth**: `undefined` \| `Date`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:57](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L57)

___

### dir

• **dir**: `undefined` \| `string`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:58](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L58)

___

### disableNavigation

• **disableNavigation**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:60](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L60)

___

### disabled

• `Optional` **disabled**: [`Matcher`](/api/types/Matcher.md) \| [`Matcher`](/api/types/Matcher.md)[]

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:59](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L59)

___

### firstWeekContainsDate

• **firstWeekContainsDate**: `undefined` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7``

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:61](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L61)

___

### fixedWeeks

• **fixedWeeks**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:62](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L62)

___

### footer

• **footer**: `ReactNode`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:63](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L63)

___

### formatters

• **formatters**: [`Formatters`](/api/types/Formatters.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:64](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L64)

___

### fromDate

• **fromDate**: `undefined` \| `Date`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:65](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L65)

___

### fromMonth

• **fromMonth**: `undefined` \| `Date`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:66](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L66)

___

### fromYear

• **fromYear**: `undefined` \| `number`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:67](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L67)

___

### hidden

• `Optional` **hidden**: [`Matcher`](/api/types/Matcher.md) \| [`Matcher`](/api/types/Matcher.md)[]

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:68](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L68)

___

### hideWeekdayRow

• **hideWeekdayRow**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:69](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L69)

___

### id

• **id**: `undefined` \| `string`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:70](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L70)

___

### initialFocus

• **initialFocus**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:71](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L71)

___

### labels

• **labels**: [`Labels`](/api/types/Labels.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:73](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L73)

___

### locale

• **locale**: `Locale`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:74](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L74)

___

### max

• **max**: `undefined` \| `number`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:75](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L75)

___

### min

• **min**: `undefined` \| `number`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:76](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L76)

___

### mode

• **mode**: `unknown`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:50](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L50)

___

### modifiers

• **modifiers**: `undefined` \| `Record`<`string`, [`Matcher`](/api/types/Matcher.md) \| [`Matcher`](/api/types/Matcher.md)[]\>

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:77](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L77)

___

### modifiersClassNames

• **modifiersClassNames**: `undefined` \| [`ModifiersClassNames`](/api/types/ModifiersClassNames.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:78](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L78)

___

### modifiersStyles

• **modifiersStyles**: `undefined` \| `Partial`<[`ModifiersStyles`](/api/types/ModifiersStyles.md)\>

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:79](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L79)

___

### month

• **month**: `undefined` \| `Date`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:80](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L80)

___

### numberOfMonths

• **numberOfMonths**: `number`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:81](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L81)

___

### onDayBlur

• **onDayBlur**: `undefined` \| [`DayFocusEventHandler`](/api/types/DayFocusEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:99](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L99)

___

### onDayClick

• **onDayClick**: `undefined` \| [`DayMouseEventHandler`](/api/types/DayMouseEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:97](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L97)

___

### onDayFocus

• **onDayFocus**: `undefined` \| [`DayFocusEventHandler`](/api/types/DayFocusEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:98](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L98)

___

### onDayKeyDown

• **onDayKeyDown**: `undefined` \| [`DayKeyboardEventHandler`](/api/types/DayKeyboardEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:102](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L102)

___

### onDayKeyPress

• **onDayKeyPress**: `undefined` \| [`DayKeyboardEventHandler`](/api/types/DayKeyboardEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:104](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L104)

___

### onDayKeyUp

• **onDayKeyUp**: `undefined` \| [`DayKeyboardEventHandler`](/api/types/DayKeyboardEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:103](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L103)

___

### onDayMouseEnter

• **onDayMouseEnter**: `undefined` \| [`DayMouseEventHandler`](/api/types/DayMouseEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:100](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L100)

___

### onDayMouseLeave

• **onDayMouseLeave**: `undefined` \| [`DayMouseEventHandler`](/api/types/DayMouseEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:101](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L101)

___

### onDayPointerEnter

• **onDayPointerEnter**: `undefined` \| [`DayPointerEventHandler`](/api/types/DayPointerEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:105](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L105)

___

### onDayPointerLeave

• **onDayPointerLeave**: `undefined` \| [`DayPointerEventHandler`](/api/types/DayPointerEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:106](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L106)

___

### onDayTouchCancel

• **onDayTouchCancel**: `undefined` \| [`DayTouchEventHandler`](/api/types/DayTouchEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:107](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L107)

___

### onDayTouchEnd

• **onDayTouchEnd**: `undefined` \| [`DayTouchEventHandler`](/api/types/DayTouchEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:108](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L108)

___

### onDayTouchMove

• **onDayTouchMove**: `undefined` \| [`DayTouchEventHandler`](/api/types/DayTouchEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:109](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L109)

___

### onDayTouchStart

• **onDayTouchStart**: `undefined` \| [`DayTouchEventHandler`](/api/types/DayTouchEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:110](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L110)

___

### onMonthChange

• **onMonthChange**: `undefined` \| [`MonthChangeEventHandler`](/api/types/MonthChangeEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:82](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L82)

___

### onNextClick

• **onNextClick**: `undefined` \| [`MonthChangeEventHandler`](/api/types/MonthChangeEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:111](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L111)

___

### onPrevClick

• **onPrevClick**: `undefined` \| [`MonthChangeEventHandler`](/api/types/MonthChangeEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:112](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L112)

___

### onSelectMulti

• **onSelectMulti**: `undefined` \| [`DaySelectEventHandler`](/api/types/DaySelectEventHandler.md)<``"multi"``\>

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:115](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L115)

___

### onSelectRange

• **onSelectRange**: `undefined` \| [`DaySelectEventHandler`](/api/types/DaySelectEventHandler.md)<``"range"``\>

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:116](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L116)

___

### onSelectSingle

• **onSelectSingle**: `undefined` \| [`DaySelectEventHandler`](/api/types/DaySelectEventHandler.md)<``"single"``\>

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:114](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L114)

___

### onWeekNumberClick

• **onWeekNumberClick**: `undefined` \| [`WeekNumberClickEventHandler`](/api/types/WeekNumberClickEventHandler.md)

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:113](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L113)

___

### pagedNavigation

• **pagedNavigation**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:83](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L83)

___

### required

• **required**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:84](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L84)

___

### reverseMonths

• **reverseMonths**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:85](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L85)

___

### selected

• `Optional` **selected**: [`Matcher`](/api/types/Matcher.md) \| [`Matcher`](/api/types/Matcher.md)[]

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:86](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L86)

___

### showOutsideDays

• **showOutsideDays**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:87](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L87)

___

### showWeekNumber

• **showWeekNumber**: `boolean`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:88](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L88)

___

### style

• **style**: `undefined` \| `CSSProperties`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:89](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L89)

___

### styles

• **styles**: `undefined` \| `Partial`<`Partial`<`Omit`<[`StyledElement`](/api/types/StyledElement.md)<`CSSProperties`\>, [`InternalModifiersElement`](/api/types/InternalModifiersElement.md)\>\>\>

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:90](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L90)

___

### toDate

• **toDate**: `undefined` \| `Date`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:91](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L91)

___

### toMonth

• **toMonth**: `undefined` \| `Date`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:93](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L93)

___

### toYear

• **toYear**: `undefined` \| `number`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:94](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L94)

___

### today

• **today**: `Date`

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:92](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L92)

___

### weekStartsOn

• **weekStartsOn**: `undefined` \| ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6``

#### Defined in

[src/contexts/DayPickerContext/DayPickerContext.tsx:95](https://github.com/gpbl/react-day-picker/blob/cd80be68f/src/contexts/DayPickerContext/DayPickerContext.tsx#L95)

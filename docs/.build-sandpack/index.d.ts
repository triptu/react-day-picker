import React$1, { ReactNode } from 'react';
import { Locale as Locale$1 } from 'date-fns';

/**
 * Render the container with navigation and the month grids.
 */
declare function Calendar(): JSX.Element;

/** Represent a day displayed in a month. */
declare class DayPickerDay {
    constructor(date: Date, displayMonth: Date);
    /** In case of an outside day, the months where the date is displayed.  */
    displayMonth?: Date;
    /** The date. */
    date: Date;
}
declare class DayPickerWeek {
    constructor(weekNumber: number, days: DayPickerDay[]);
    weekNumber: number;
    days: DayPickerDay[];
}
/**
 * A month displayed in as month grid. Contains the week
 */
declare class DayPickerMonth {
    constructor(month: Date, weeks: DayPickerWeek[]);
    /** The date of the month. */
    date: Date;
    /** The weeks within the month. */
    weeks: DayPickerWeek[];
}
/** The calendar displayed in DayPicker. */
interface DayPickerCalendar {
    /** The current month. When `numberOfMonths` is greater than one, is the first of the displayed months. */
    currentMonth: Date;
    /** The months displayed in the calendar. */
    months: DayPickerMonth[];
    /** All the dates displayed in the calendar. */
    dates: Date[];
    getDays: () => DayPickerDay[];
    /** Navigate to the specified month. */
    goToMonth: (month: Date) => void;
    /** Navigate to the next month. */
    goToNextMonth: () => void;
    /** Navigate to the previous month. */
    goToPreviousMonth: () => void;
    /** Navigate to the specified date. */
    goToDate: (date: Date, refDate?: Date) => void;
    /** The next month to display. */
    nextMonth?: Date;
    /** The previous month to display. */
    previousMonth?: Date;
    /** Whether the given day is included in the displayed months. */
    isDateDisplayed: (day: Date) => boolean;
}

declare const calendarContext: React$1.Context<DayPickerCalendar | undefined>;
/**
 * The provider for the {@link calendarContext}, storing the calendar state.
 */
declare function CalendarProvider(providerProps: {
    children?: ReactNode;
}): JSX.Element;
/**
 * Use this hook to access to the dates displayed in the calendar and to navigate between months.
 */
declare function useCalendar(): DayPickerCalendar;

/**
 * A value or a function that matches a specific day.
 *
 * Matchers are passed to DayPicker via {@link DayPickerBase.disabled},
 * {@link DayPickerBase.hidden} or {@link DayPickerProps.selected} and are used to
 * determine if a day should get a {@link Modifier}.
 *
 * Matchers can be of different types:
 *
 * ```tsx
 * // will always match the day
 * const booleanMatcher: Matcher = true;
 *
 * // will match the today's date
 * const dateMatcher: Matcher = new Date();
 *
 * // will match the days in the array
 * const arrayMatcher: Matcher = [new Date(2019, 1, 2);, new Date(2019, 1, 4)];
 *
 * // will match days after the 2nd of February 2019
 * const afterMatcher: DateAfter = { after: new Date(2019, 1, 2); };
 *  // will match days before the 2nd of February 2019 }
 * const beforeMatcher: DateBefore = { before: : new Date(2019, 1, 2); };
 *
 * // will match Sundays
 * const dayOfWeekMatcher: DayOfWeek = {
 *  dayOfWeek: 0
 * };
 *
 * // will match the included days, except the two dates
 * const intervalMatcher: DateInterval = {
 *    after: new Date(2019, 1, 2);,
 *    before: new Date(2019, 1, 5)
 * };
 *
 * // will match the included days, including the two dates
 * const rangeMatcher: DateRange = {
 *    from: new Date(2019, 1, 2);,
 *    to: new Date(2019, 1, 5)
 * };
 *
 * // will match when the function return true
 * const functionMatcher: Matcher = (day: Date) => {
 *  return day.getMonth() === 2 // match when month is March
 * };
 * ```
 * @see {@link isMatch}
 */
type Matcher = boolean | ((date: Date) => boolean) | Date | Date[] | DateRange | DateBefore | DateAfter | DateInterval | DayOfWeek;
/** A matcher to match a day falling after the specified date, with the date not included. */
type DateAfter = {
    after: Date;
};
/** A matcher to match a day falling before the specified date, with the date not included. */
type DateBefore = {
    before: Date;
};
/** A matcher to match a day falling before and/or after two dates, where the dates are not included. */
type DateInterval = {
    before: Date;
    after: Date;
};
/** A matcher to match a range of dates. The range can be open. Differently from {@link DateInterval}, the dates here are included. */
type DateRange = {
    from: Date | undefined;
    to?: Date | undefined;
};
/** A matcher to match a date being one of the specified days of the week (`0-7`, where `0` is Sunday). */
type DayOfWeek = {
    dayOfWeek: number[];
};
/** Returns true if `matcher` is of type {@link DateInterval}. */
declare function isDateInterval(matcher: unknown): matcher is DateInterval;
/** Returns true if `value` is a {@link DateRange} type. */
declare function isDateRange(value: unknown): value is DateRange;
/** Returns true if `value` is of type {@link DateAfter}. */
declare function isDateAfterType(value: unknown): value is DateAfter;
/** Returns true if `value` is of type {@link DateBefore}. */
declare function isDateBeforeType(value: unknown): value is DateBefore;
/** Returns true if `value` is a {@link DayOfWeek} type. */
declare function isDayOfWeekType(value: unknown): value is DayOfWeek;

/** A _modifier_ represents different styles or states of a day displayed in the calendar. */
type CustomModifier = string;
/** The modifiers used by DayPicker. */
type Modifiers = Record<CustomModifier, Matcher[]> & Record<InternalModifier, Matcher[]>;
/** The name of the modifiers that are used internally by DayPicker. */
type InternalModifier = 'outside' | 'disabled' | 'selected' | 'hidden' | 'today' | 'range_start' | 'range_end' | 'range_middle';
/**
 * The modifiers that are matching a day in the calendar. Use the {@link useActiveModifiers} hook to get the modifiers for a day.
 *
 * ```
 * const matchingModifiers: MatchingModifiers = {
 *  selected: true,
 *  customModifier: true
 * }
 * ```
 *
 * */
type MatchingModifiers = Record<CustomModifier, boolean> & Record<InternalModifier, boolean>;
/** The style to apply to each day element matching a modifier. */
type ModifiersStyles = Record<CustomModifier, React.CSSProperties> & Partial<Record<InternalModifier, React.CSSProperties>>;
/** The classnames to assign to each day element matching a modifier. */
type ModifiersClassNames = Record<CustomModifier, string> & Partial<Record<InternalModifier, string>>;

interface DayGridCellProps extends React$1.PropsWithChildren {
    day: DayPickerDay;
    state: MatchingModifiers;
    htmlAttributes: React$1.HTMLAttributes<HTMLDivElement>;
}
/** Render the gridcell with the Day. */
declare function DayGridCell(props: DayGridCellProps): JSX.Element;

interface MonthCaptionProps {
    id: string;
    month: DayPickerMonth;
}
declare function MonthCaption(props: MonthCaptionProps): JSX.Element;

interface MonthGridProps extends Pick<React$1.AriaAttributes, 'aria-labelledby'> {
    /** The month where the grid is displayed. */
    month: DayPickerMonth;
    /** The index where this month is displayed. */
    displayIndex: number;
}
/**
 * Render the grid with the weekday header row and the weeks for the given month.
 */
declare function MonthGrid(props: MonthGridProps): JSX.Element;

type CaptionLayout = 'dropdown' | 'buttons' | 'dropdown-buttons';
declare function Nav(): JSX.Element;

interface WeekdayColumnHeaderProps extends Pick<React$1.AriaAttributes, 'aria-colindex'> {
    weekday?: Date;
}
/** Render the column header with the weekday name (e.g. "Mo", "Tu", etc.) */
declare function WeekdayColumnHeader(props: WeekdayColumnHeaderProps): JSX.Element;

declare function WeekdaysRow(): JSX.Element;

interface WeekNumberRowHeaderProps {
    week: DayPickerWeek;
}
/** Render the cell with the number of the week. */
declare function WeekNumberRowHeader(props: WeekNumberRowHeaderProps): JSX.Element;

/**
 * The props for the {@link WeekRow} component.
 */
interface WeekRowProps extends Pick<React$1.AriaAttributes, 'aria-rowindex'> {
    week: DayPickerWeek;
}
/** Render a row in the calendar, with the days and the week number. */
declare function WeekRow(props: WeekRowProps): JSX.Element;

type DaySelectEventHandler<TMode extends DaysSelectionMode> = (days: DayPickerSelectedValue<TMode>, selectedDay: Date, state: MatchingModifiers, e: React$1.MouseEvent) => void;
type DayEventHandler<TEvent> = (day: Date, state: MatchingModifiers, e: TEvent) => void;
/**
 * The event handler when a day is clicked.
 *
 * @deprecated Use {@link DayMouseEventHandler} instead.
 */
type DayClickEventHandler = DayEventHandler<React$1.MouseEvent>;
/** The event handler when a day is focused. */
type DayFocusEventHandler = DayEventHandler<React$1.FocusEvent | React$1.KeyboardEvent>;
/** The event handler when a day gets a keyboard event. */
type DayKeyboardEventHandler = DayEventHandler<React$1.KeyboardEvent>;
/** The event handler when a day gets a mouse event. */
type DayMouseEventHandler = DayEventHandler<React$1.MouseEvent>;
/** The event handler when a day gets a pointer event. */
type DayPointerEventHandler = DayEventHandler<React$1.PointerEvent>;
/** The event handler when a month is changed in the calendar. */
type MonthChangeEventHandler = (month: Date) => void;
/**The event handler when the week number is clicked. */
type WeekNumberClickEventHandler = (
/** The week number that has been clicked. */
weekNumber: number, 
/** The dates in the clicked week. */
dates: Date[], 
/** The mouse event that triggered this event. */
e: React$1.MouseEvent) => void;
/** The event handler when a day gets a touch event. */
type DayTouchEventHandler = DayEventHandler<React$1.TouchEvent>;

/**
 * @deprecated Use {@link MonthCaption} or {@link Nav} as custom components instead.
 */
declare const Caption: typeof MonthCaption;
/**
 * @deprecated Use {@link MonthCaptionProps} or {@link NavProps} instead.
 */
type CaptionProps = MonthCaptionProps;
/**
 * @deprecated Use {@link DayGridCell} instead.
 */
declare const DayContent: typeof DayGridCell;
/**
 * @deprecated Use {@link DayGridCellProps} instead.
 */
type DayContentProps = DayGridCellProps;
/**
 * @deprecated Use {@link DayGridCell} instead.
 */
declare const Row: typeof WeekRow;
/**
 * @deprecated Use {@link WeekRowProps} instead.
 */
type RowProps = WeekRowProps;
/** @deprecated Use {@link DaySelectEventHandler} instead. */
type SelectRangeEventHandler = DaySelectEventHandler<'range'>;
/** @deprecated Use {@link DaySelectEventHandler} instead. */
type SelectSingleEventHandler = DaySelectEventHandler<'single'>;
/** @deprecated Use {@link DaySelectEventHandler} instead. */
type SelectMultipleEventHandler = DaySelectEventHandler<'multi'>;

declare const components_Calendar: typeof Calendar;
declare const components_Caption: typeof Caption;
type components_CaptionLayout = CaptionLayout;
type components_CaptionProps = CaptionProps;
declare const components_DayContent: typeof DayContent;
type components_DayContentProps = DayContentProps;
declare const components_DayGridCell: typeof DayGridCell;
type components_DayGridCellProps = DayGridCellProps;
declare const components_MonthCaption: typeof MonthCaption;
type components_MonthCaptionProps = MonthCaptionProps;
declare const components_MonthGrid: typeof MonthGrid;
type components_MonthGridProps = MonthGridProps;
declare const components_Nav: typeof Nav;
declare const components_Row: typeof Row;
type components_RowProps = RowProps;
type components_SelectMultipleEventHandler = SelectMultipleEventHandler;
type components_SelectRangeEventHandler = SelectRangeEventHandler;
type components_SelectSingleEventHandler = SelectSingleEventHandler;
declare const components_WeekNumberRowHeader: typeof WeekNumberRowHeader;
type components_WeekNumberRowHeaderProps = WeekNumberRowHeaderProps;
declare const components_WeekRow: typeof WeekRow;
type components_WeekRowProps = WeekRowProps;
declare const components_WeekdayColumnHeader: typeof WeekdayColumnHeader;
type components_WeekdayColumnHeaderProps = WeekdayColumnHeaderProps;
declare const components_WeekdaysRow: typeof WeekdaysRow;
declare namespace components {
  export {
    components_Calendar as Calendar,
    components_Caption as Caption,
    components_CaptionLayout as CaptionLayout,
    components_CaptionProps as CaptionProps,
    components_DayContent as DayContent,
    components_DayContentProps as DayContentProps,
    components_DayGridCell as DayGridCell,
    components_DayGridCellProps as DayGridCellProps,
    components_MonthCaption as MonthCaption,
    components_MonthCaptionProps as MonthCaptionProps,
    components_MonthGrid as MonthGrid,
    components_MonthGridProps as MonthGridProps,
    components_Nav as Nav,
    components_Row as Row,
    components_RowProps as RowProps,
    components_SelectMultipleEventHandler as SelectMultipleEventHandler,
    components_SelectRangeEventHandler as SelectRangeEventHandler,
    components_SelectSingleEventHandler as SelectSingleEventHandler,
    components_WeekNumberRowHeader as WeekNumberRowHeader,
    components_WeekNumberRowHeaderProps as WeekNumberRowHeaderProps,
    components_WeekRow as WeekRow,
    components_WeekRowProps as WeekRowProps,
    components_WeekdayColumnHeader as WeekdayColumnHeader,
    components_WeekdayColumnHeaderProps as WeekdayColumnHeaderProps,
    components_WeekdaysRow as WeekdaysRow,
  };
}

/** Represents a function to format a date. */
type DateFormatter = (date: Date, options?: {
    locale?: Locale;
}) => string;
/** Represent a map of formatters used to render localized content. */
type Formatters = {
    /** Format the month in the caption when `captionLayout` is `buttons`. */
    formatCaption: DateFormatter;
    /** Format the month in the navigation dropdown. */
    formatMonthCaption: DateFormatter;
    /** Format the year in the navigation dropdown. */
    formatYearCaption: DateFormatter;
    /** Format the day in the day cell. */
    formatDay: DateFormatter;
    /** Format the week number. */
    formatWeekNumber: WeekNumberFormatter;
    /** Format the week day name in the header */
    formatWeekdayName: DateFormatter;
};
/** Represent a function to format the week number. */
type WeekNumberFormatter = (weekNumber: number, options?: {
    locale?: Locale;
}) => React$1.ReactNode;

/** Map of functions to translate ARIA labels for the relative elements. */
type Labels = {
    labelMonthDropdown: () => string;
    labelYearDropdown: () => string;
    /** Function returning the label for the month grid. */
    labelGrid: MonthLabel;
    labelNext: NavButtonLabel;
    labelPrevious: NavButtonLabel;
    labelDay: DayLabel;
    labelWeekday: WeekdayLabel;
    labelWeekNumber: WeekNumberLabel;
};
/** Return the ARIA label for the {@link Day} component. */
type DayLabel = (day: Date, matchingModifiers: MatchingModifiers, options?: {
    locale?: Locale$1;
}) => string;
/** Return the ARIA label for the "next month" / "prev month" buttons in the navigation.*/
type MonthLabel = (month: Date, options?: {
    locale?: Locale$1;
}) => string;
/** Return the ARIA label for the "next month" / "prev month" buttons in the navigation.*/
type NavButtonLabel = (month?: Date, options?: {
    locale?: Locale$1;
}) => string;
/** Return the ARIA label for the Head component.*/
type WeekdayLabel = (day: Date, options?: {
    locale?: Locale$1;
}) => string;
/** Return the ARIA label of the week number.*/
type WeekNumberLabel = (n: number, options?: {
    locale?: Locale$1;
}) => string;

declare const styles: {
  'root': string
  'vhidden': string
  'with_weeknumber': string
  'months_wrapper': string
  'caption': string
  'multiple_months': string
  'caption_dropdowns': string
  'caption_label': string
  'nav': string
  'caption_start': string
  'caption_end': string
  'button_next': string
  'button_previous': string
  'dropdown_year': string
  'dropdown_month': string
  'dropdown': string
  'dropdown_icon': string
  'head': string
  'head_row': string
  'row': string
  'head_cell': string
  'tbody': string
  'footer': string
  'cell': string
  'weeknumber_rowheader': string
  'day': string
  'day_today': string
  'day_outside': string
  'day_selected': string
  'day_disabled': string
  'day_hidden': string
  'day_range_start': string
  'day_range_end': string
  'day_range_middle': string
  'weekdays_row': string
  'weekday_columnheader': string
  'week_row': string
  'month_grid_wrapper': string
  'month_rowgroup': string
  'month_grid': string
  'month_caption': string
  'caption_between': string
  'button_icon': string
}

/** The style (either via class names or via in-line styles) of an element. */
type StyledElement<T = string | React$1.CSSProperties> = {
    /** The calendar element (root). */
    readonly root: T;
    /** The root element when `numberOfMonths > 1`. */
    readonly multiple_months: T;
    /** The root element when `showWeekNumber={true}`. */
    readonly with_weeknumber: T;
    /** The style of an element visually hidden. */
    readonly vhidden: T;
    /** The style for resetting the buttons. */
    readonly button_reset: T;
    /** The buttons. */
    readonly button: T;
    /** The caption (showing the calendar heading and the navigation) */
    readonly month_caption: T;
    /** The caption when at the start of a series of months. */
    readonly caption_start: T;
    /** The caption when at the end of a series of months. */
    readonly caption_end: T;
    /** The caption when between two months (when `multipleMonths > 2`). */
    readonly caption_between: T;
    /** The caption label. */
    readonly caption_label: T;
    /** The drop-downs container. */
    readonly caption_dropdowns: T;
    /** The drop-down (select) element. */
    readonly dropdown: T;
    /** The drop-down to change the month. */
    readonly dropdown_month: T;
    /** The drop-down to change the year. */
    readonly dropdown_year: T;
    /** The drop-down icon. */
    readonly dropdown_icon: T;
    /** The navigation container. */
    readonly nav: T;
    /** The navigation button. */
    readonly nav_button: T;
    /** The "previous month" navigation button. */
    readonly nav_button_previous: T;
    /** The "next month" navigation button. */
    readonly nav_button_next: T;
    /** The icon for the navigation button. */
    readonly button_icon: T;
    /** The months wrapper. */
    readonly months_wrapper: T;
    /** The container of the grid displaying the month and the month caption. */
    readonly month_grid_wrapper: T;
    /** The grid displaying the month. */
    readonly month_grid: T;
    /** The row grouping the week rows in the month grid. */
    readonly month_rowgroup: T;
    /** The row with the weekday column headers. */
    readonly weekdays_row: T;
    /** The weekday column header. */
    readonly weekday_columnheader: T;
    /** The row with the week. */
    readonly week_row: T;
    /** The weeknumber displayed in the column. */
    readonly weeknumber: T;
    /** The cell containing the weeknumber row header. */
    readonly weeknumber_rowheader: T;
    /** The day grid cell. */
    readonly day: T;
    /** The day when outside the month. */
    readonly day_outside: T;
    /** The day when selected. */
    readonly day_selected: T;
    /** The day when disabled. */
    readonly day_disabled: T;
    /** The day when hidden. */
    readonly day_hidden: T;
    /** The day when at the start of a selected range. */
    readonly day_range_start: T;
    /** The day when at the end of a selected range. */
    readonly day_range_end: T;
    /** The day in the middle of a selected range: it does not include the "from" and the "to" days. */
    readonly day_range_middle: T;
    /** The day when today. */
    readonly day_today: T;
    /** The footer when today. */
    readonly footer: T;
};
/** These elements must not be in the `styles` or `classNames` records as they are styled via the `modifiersStyles` or `modifiersClassNames` pop */
type InternalModifiersElement = 'day_outside' | 'day_selected' | 'day_disabled' | 'day_hidden' | 'day_range_start' | 'day_range_end' | 'day_range_middle' | 'day_today';
/** The class names of each element. */
type ClassNames = typeof styles;
/**
 * The inline-styles of each styled element, to use with the `styles` prop. Day
 * modifiers, such as `today` or `hidden`, should be styled using the
 * `modifiersStyles` prop.
 */
type Styles = Partial<Omit<StyledElement<React$1.CSSProperties>, InternalModifiersElement>>;
/** Props of a component that can be styled via classNames or inline-styles. */
type StyledComponent = {
    className?: string;
    style?: React$1.CSSProperties;
} & React$1.PropsWithChildren;

type CustomComponents = {
    [key in keyof typeof components]?: (typeof components)[key];
};
/** The name of a color in our color palette. */
type DaysSelectionMode = 'none' | 'range' | 'single' | 'multi';
type DayPickerSelectedValue<TMode extends DaysSelectionMode | unknown> = [
    TMode
] extends ['single'] ? Date | undefined : [TMode] extends ['multi'] ? Array<Date> : [TMode] extends ['range'] ? DateRange : never;
/**
 * The {@link DayPicker} component props shared with all the selection modes.
 */
interface DayPickerBaseProps {
    /**
     * The CSS class to add to the container element. To change the name of the
     * class instead, use `classNames.root`.
     */
    className?: string;
    /**
     * Change the class names of the HTML elements.
     *
     * Use this prop when you need to change the default class names — for example
     * when using CSS modules.
     */
    classNames?: Partial<ClassNames>;
    /**
     * Change the class name for the day matching the {@link modifiers}.
     */
    modifiersClassNames?: ModifiersClassNames;
    /**
     * Style to apply to the container element.
     */
    style?: React$1.CSSProperties;
    /**
     * Change the inline styles of the HTML elements.
     */
    styles?: Styles;
    /**
     * Change the inline style for the day matching the {@link modifiers}.
     */
    modifiersStyles?: ModifiersStyles;
    /**
     * A unique id to replace the random generated id – used by DayPicker for
     * accessibility.
     */
    id?: string;
    /**
     * The initial month to show in the calendar. Use this prop to let DayPicker
     * control the current month. If you need to set the month programmatically,
     * use {@link month} and {@link onMonthChange}.
     *
     * @defaultValue The current month
     */
    defaultMonth?: Date;
    /**
     * The month displayed in the calendar.
     *
     * As opposed to {@link DayPickerBase.defaultMonth}, use this prop with
     * {@link DayPickerBase.onMonthChange} to change the month programmatically.
     */
    month?: Date;
    /**
     * Event fired when the user navigates between months.
     */
    onMonthChange?: MonthChangeEventHandler;
    /**
     * The number of displayed months.
     *
     * @defaultValue 1
     */
    numberOfMonths?: number;
    /**
     * The earliest day to start the month navigation.
     */
    fromDate?: Date;
    /**
     * The latest day to end the month navigation.
     */
    toDate?: Date;
    /**
     * The earliest month to start the month navigation.
     */
    fromMonth?: Date;
    /**
     * The latest month to end the month navigation.
     */
    toMonth?: Date;
    /**
     * The earliest year to start the month navigation.
     */
    fromYear?: number;
    /**
     * The latest year to end the month navigation.
     */
    toYear?: number;
    /**
     * Disable the navigation between months.
     *
     * @defaultValue false
     */
    disableNavigation?: boolean;
    /**
     * Paginate the month navigation displaying the {@link numberOfMonths} at
     * time.
     *
     * @defaultValue false
     */
    pagedNavigation?: boolean;
    /**
     * Render the months in reversed order (when {@link numberOfMonths} is greater
     * than `1`) to display the most recent month first.
     *
     * @defaultValue false
     */
    reverseMonths?: boolean;
    /**
     * Change the layout of the caption:
     *
     * - `buttons`: display prev/right buttons
     * - `dropdown`: display drop-downs to change the month and the year
     *
     * **Note:** the `dropdown` layout is available only when `fromDate`,
     * `fromMonth` or`fromYear` and `toDate`, `toMonth` or `toYear` are set.
     *
     * @defaultValue buttons
     */
    captionLayout?: CaptionLayout;
    /**
     * Display six weeks per months, regardless the month’s number of weeks.
     * To use this prop, {@link showOutsideDays} must be set.
     *
     * @defaultValue false
     */
    fixedWeeks?: boolean;
    /**
     * Hide the row displaying the weekday row header.
     *
     * @defaultValue false
     */
    hideWeekdayRow?: boolean;
    /**
     * Show the outside days.  An outside day is a day falling in the next or the
     * previous month.
     *
     * @defaultValue false
     */
    showOutsideDays?: boolean;
    /**
     * Show the week numbers column. Weeks are numbered according to the local
     * week index.
     *
     * - to use ISO week numbering, use the {@link ISOWeek} prop.
     * - to change how the week numbers are displayed, use the {@link Formatters} prop.
     *
     * @see  {@link ISOWeek}, {@link weekStartsOn} and {@link firstWeekContainsDate}.
     *
     * @defaultValue false
     */
    showWeekNumber?: boolean;
    /**
     * The index of the first day of the week (0 - Sunday). Overrides the locale's one.
     *
     * See also {@link ISOWeek}.
     */
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * The day of January, which is always in the first week of the year. See also
     * https://date-fns.org/docs/getWeek and
     * https://en.wikipedia.org/wiki/Week#Numbering
     *
     * See also {@link ISOWeek}.
     */
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    /**
     * Use ISO week dates instead of the locale setting. See also
     * https://en.wikipedia.org/wiki/ISO_week_date.
     *
     * Setting this prop will ignore {@link weekStartsOn} and {@link firstWeekContainsDate}.
     */
    ISOWeek?: boolean;
    /**
     * Replace the components used to create the layout with other components
     */
    components?: CustomComponents;
    /**
     * Content to add to the table footer element.
     */
    footer?: React$1.ReactNode;
    /**
     * When a selection mode is set, DayPicker will focus the first selected day
     * (if set) or the today's date (if not disabled).
     *
     * Use this prop when you need to focus DayPicker after a user actions, for
     * improved accessibility.
     */
    initialFocus?: boolean;
    /**
     * Apply the `disabled` modifier to the matching days.
     */
    disabled?: Matcher | Matcher[] | undefined;
    /**
     * Apply the `hidden` modifier to the matching days. Will hide them from the
     * calendar.
     */
    hidden?: Matcher | Matcher[] | undefined;
    /**
     * Apply the `selected` modifier to the matching days.
     */
    selected?: Matcher | Matcher[] | undefined;
    /**
     * The today’s date. Default is the current date. This Date will get the
     * `today` modifier to style the day.
     */
    today?: Date;
    /**
     * Add modifiers to the matching days.
     */
    modifiers?: Record<CustomModifier, Matcher | Matcher[]> | undefined;
    /**
     * The date-fns locale object used to localize dates.
     *
     * @defaultValue en-US
     */
    locale?: Locale;
    /**
     * Labels creators to override the defaults. Use this prop to customize the
     * ARIA labels attributes.
     */
    labels?: Partial<Labels>;
    /**
     * The text direction of the calendar. Use `ltr` for left-to-right (default)
     * or `rtl` for right-to-left.
     */
    dir?: string;
    /**
     * A map of formatters. Use the formatters to override the default formatting
     * functions.
     */
    formatters?: Partial<Formatters>;
    onDayClick?: DayMouseEventHandler;
    onDayFocus?: DayFocusEventHandler;
    onDayBlur?: DayFocusEventHandler;
    onDayMouseEnter?: DayMouseEventHandler;
    onDayMouseLeave?: DayMouseEventHandler;
    onDayKeyDown?: DayKeyboardEventHandler;
    onDayKeyUp?: DayKeyboardEventHandler;
    onDayKeyPress?: DayKeyboardEventHandler;
    onDayPointerEnter?: DayPointerEventHandler;
    onDayPointerLeave?: DayPointerEventHandler;
    onDayTouchCancel?: DayTouchEventHandler;
    onDayTouchEnd?: DayTouchEventHandler;
    onDayTouchMove?: DayTouchEventHandler;
    onDayTouchStart?: DayTouchEventHandler;
    onNextClick?: MonthChangeEventHandler;
    onPrevClick?: MonthChangeEventHandler;
    onWeekNumberClick?: WeekNumberClickEventHandler;
}
/**
 * The props for the {@link DayPicker} component when `mode="none"`.
 */
interface DayPickerNoneProps {
    mode?: 'none' | undefined;
}
/**
 * The props for the {@link DayPicker} component when `mode="single"`.
 */
interface DayPickerSingleProps {
    mode: 'single';
    selected?: DayPickerSelectedValue<'single'> | undefined;
    onSelect?: DaySelectEventHandler<'single'>;
    required?: boolean;
}
/**
 * The props for the {@link DayPicker} component when `mode="multi"`.
 */
interface DayPickerMultiProps {
    mode: 'multi';
    selected?: DayPickerSelectedValue<'multi'> | undefined;
    onSelect?: DaySelectEventHandler<'multi'>;
    min?: number;
    max?: number;
}
/**
 * The props for the {@link DayPicker} component when `mode="range"`.
 */
interface DayPickerRangeProps {
    mode: 'range';
    selected?: DayPickerSelectedValue<'range'> | undefined;
    onSelect?: DaySelectEventHandler<'range'>;
    min?: number;
    max?: number;
}
/**
 * The props for the {@link DayPicker} component.
 */
type DayPickerProps = DayPickerBaseProps & (DayPickerSingleProps | DayPickerMultiProps | DayPickerRangeProps | DayPickerNoneProps);
/**
 * DayPicker render a date picker component to let users pick dates from a
 * calendar. See http://react-day-picker.js.org for updated documentation and
 * examples.
 *
 * ### Customization
 *
 * DayPicker offers different customization props. For example,
 *
 * - show multi months using `numberOfMonths`
 * - display a dropdown to navigate the months via `captionLayout`
 * - display the week numbers with `showWeekNumbers`
 * - disable or hide days with `disabled` or `hidden`
 *
 * ### Controlling the months
 *
 * Change the initially displayed month using the `defaultMonth` prop. The
 * displayed months are controlled by DayPicker and stored in its internal
 * state. To control the months yourself, use `month` instead of `defaultMonth`
 * and use the `onMonthChange` event to set it.
 *
 * To limit the months the user can navigate to, use
 * `fromDate`/`fromMonth`/`fromYear` or `toDate`/`toMonth`/`toYear`.
 *
 * ### Selection modes
 *
 * DayPicker supports different selection mode that can be toggled using the
 * `mode` prop:
 *
 * - `mode="single"`: only one day can be selected. Use `required` to make the
 *   selection required. Use the `onSelect` event handler to get the selected
 *   days.
 * - `mode="multi"`: users can select one or more days. Limit the amount of
 *   days that can be selected with the `min` or the `max` props.
 * - `mode="range"`: users can select a range of days. Limit the amount of days
 *   in the range with the `min` or the `max` props.
 * - `mode="default"` (default): the built-in selections are disabled. Implement
 *   your own selection mode with `onDayClick`.
 *
 * The selection modes should cover the most common use cases. In case you
 * need a more refined way of selecting days, use `mode="default"`. Use the
 * `selected` props and add the day event handlers to add/remove days from the
 * selection.
 *
 * ### Modifiers
 *
 * A _modifier_ represents different styles or states for the days displayed in
 * the calendar (like "selected" or "disabled"). Define custom modifiers using
 * the `modifiers` prop.
 *
 * ### Formatters and custom component
 *
 * You can customize how the content is displayed in the date picker by using
 * either the formatters or replacing the internal components.
 *
 * For the most common cases you want to use the `formatters` prop to change how
 * the content is formatted in the calendar. Use the `components` prop to
 * replace the internal components, like the navigation icons.
 *
 * ### Styling
 *
 * DayPicker comes with a default, basic style in `react-day-picker/style` – use
 * it as template for your own style.
 *
 * If you are using CSS modules, pass the imported styles object the
 * `classNames` props.
 *
 * You can also style the elements via inline styles using the `styles` prop.
 *
 * ### Form fields
 *
 * If you need to bind the date picker to a form field, you can use the
 * `useInput` hooks for a basic behavior. See the `useInput` source as an
 * example to bind the date picker with form fields.
 *
 * ### Localization
 *
 * To localize DayPicker, import the locale from `date-fns` package and use the
 * `locale` prop.
 *
 * For example, to use Spanish locale:
 *
 * ```
 * import { es } from 'date-fns/locale';
 * <DayPicker locale={es} />
 * ```
 */
declare function DayPicker(props: DayPickerProps): JSX.Element;

/** A record with `data-*` attributes passed to {@link DayPicker}. */
type DataAttributes = Record<string, unknown>;
/**
 * The {@link DayPickerProps} with their default values. Use this type within
 * internal components to use safe props and avoid all conditionals.
 */
interface DayPickerContext<TMode extends DaysSelectionMode | unknown> {
    mode: TMode | unknown;
    captionLayout: CaptionLayout;
    className: string | undefined;
    classNames: Required<ClassNames>;
    components: Partial<CustomComponents> | undefined;
    dataAttributes: DataAttributes;
    defaultMonth: Date | undefined;
    dir: string | undefined;
    disabled?: DayPickerBaseProps['disabled'];
    disableNavigation: boolean;
    firstWeekContainsDate: DayPickerBaseProps['firstWeekContainsDate'];
    fixedWeeks: boolean;
    footer: React$1.ReactNode | undefined;
    formatters: Formatters;
    fromDate: Date | undefined;
    fromMonth: Date | undefined;
    fromYear: number | undefined;
    hidden?: DayPickerBaseProps['hidden'];
    hideWeekdayRow: boolean;
    id: string | undefined;
    initialFocus: boolean;
    ISOWeek: boolean;
    labels: Labels;
    locale: Locale$1;
    max: number | undefined;
    min: number | undefined;
    modifiers: Record<CustomModifier, Matcher | Matcher[]> | undefined;
    modifiersClassNames: ModifiersClassNames | undefined;
    modifiersStyles: Partial<ModifiersStyles> | undefined;
    month: Date | undefined;
    numberOfMonths: number;
    onMonthChange: MonthChangeEventHandler | undefined;
    pagedNavigation: boolean;
    required: boolean;
    reverseMonths: boolean;
    selected?: DayPickerBaseProps['selected'];
    showOutsideDays: boolean;
    showWeekNumber: boolean;
    style: React$1.CSSProperties | undefined;
    styles: Partial<Styles> | undefined;
    toDate: Date | undefined;
    today: Date;
    toMonth: Date | undefined;
    toYear: number | undefined;
    weekStartsOn: DayPickerBaseProps['weekStartsOn'];
    onDayClick: DayMouseEventHandler | undefined;
    onDayFocus: DayFocusEventHandler | undefined;
    onDayBlur: DayFocusEventHandler | undefined;
    onDayMouseEnter: DayMouseEventHandler | undefined;
    onDayMouseLeave: DayMouseEventHandler | undefined;
    onDayKeyDown: DayKeyboardEventHandler | undefined;
    onDayKeyUp: DayKeyboardEventHandler | undefined;
    onDayKeyPress: DayKeyboardEventHandler | undefined;
    onDayPointerEnter: DayPointerEventHandler | undefined;
    onDayPointerLeave: DayPointerEventHandler | undefined;
    onDayTouchCancel: DayTouchEventHandler | undefined;
    onDayTouchEnd: DayTouchEventHandler | undefined;
    onDayTouchMove: DayTouchEventHandler | undefined;
    onDayTouchStart: DayTouchEventHandler | undefined;
    onNextClick: MonthChangeEventHandler | undefined;
    onPrevClick: MonthChangeEventHandler | undefined;
    onWeekNumberClick: WeekNumberClickEventHandler | undefined;
    onSelectSingle: DaySelectEventHandler<'single'> | undefined;
    onSelectMulti: DaySelectEventHandler<'multi'> | undefined;
    onSelectRange: DaySelectEventHandler<'range'> | undefined;
}
declare const dayPickerContext: React$1.Context<DayPickerContext<unknown> | undefined>;
/** The props for the {@link DayPickerProvider}. */
interface DayPickerProviderProps<TMode extends DaysSelectionMode> {
    mode: TMode;
    /** The initial props from the DayPicker component. */
    dayPickerProps: DayPickerProps;
    children: ReactNode;
}
/**
 * The provider for the {@link dayPickerContext}, storing the props and setting its defaults.
 * Must be the root of all the providers.
 */
declare function DayPickerProvider<TMode extends DaysSelectionMode>(providerProps: DayPickerProviderProps<TMode>): JSX.Element;
/**
 * Use this hook to access to the DayPicker context within custom components. */
declare function useDayPicker(): DayPickerContext<unknown>;

/**
 * The default formatter for the caption.
 */
declare function formatCaption(month: Date, options?: {
    locale?: Locale$1;
}): string;

/**
 * The default formatter for the Day button.
 */
declare function formatDay(day: Date, options?: {
    locale?: Locale$1;
}): string;

/**
 * The default formatter for the Month caption.
 */
declare function formatMonthCaption(month: Date, options?: {
    locale?: Locale$1;
}): string;

/**
 * The default formatter for the week number.
 */
declare function formatWeekNumber(weekNumber: number): string;

/**
 * The default formatter for the name of the weekday.
 */
declare function formatWeekdayName(weekday: Date, options?: {
    locale?: Locale$1;
}): string;

/**
 * The default formatter for the Year caption.
 */
declare function formatYearCaption(year: Date, options?: {
    locale?: Locale;
}): string;

/** The props to attach to the input field when using {@link useInput}. */
type InputHTMLAttributes = Pick<React$1.InputHTMLAttributes<HTMLInputElement>, 'onBlur' | 'onChange' | 'onFocus' | 'value' | 'placeholder'>;
/** The props to attach to the DayPicker component when using {@link useInput}. */
type InputDayPickerProps = Pick<DayPickerSingleProps, 'selected'> & Pick<DayPickerBaseProps, 'fromDate' | 'toDate' | 'locale' | 'month' | 'onDayClick' | 'onMonthChange' | 'today'>;
interface UseInputOptions extends Pick<DayPickerBaseProps, 'locale' | 'fromDate' | 'toDate' | 'fromMonth' | 'toMonth' | 'fromYear' | 'toYear' | 'today'> {
    /** The initially selected date */
    defaultSelected?: Date;
    /**
     * The format string for formatting the input field. See
     * https://date-fns.org/docs/format for a list of format strings.
     *
     * @defaultValue PP
     */
    format?: string;
    /** Make the selection required. */
    required?: boolean;
}
/** Represent the value returned by {@link useInput}. */
interface UseInputValue {
    /** The props to pass to a DayPicker component. */
    dayPickerProps: InputDayPickerProps;
    /** The props to pass to an input field. */
    htmlAttributes: InputHTMLAttributes;
    /** A function to reset to the initial state. */
    reset: () => void;
    /** A function to set the selected day. */
    setSelected: (day: Date | undefined) => void;
}
/** Return props and setters for binding an input field to DayPicker. */
declare function useInput(options?: UseInputOptions): UseInputValue;

/**
 * The default ARIA label for the day button.
 */
declare const labelDay: DayLabel;

/**
 * The default ARIA label for the WeekNumber element.
 */
declare const labelMonthDropdown: () => string;

/**
 * The default ARIA label for next month button in navigation
 */
declare const labelNext: NavButtonLabel;

/**
 * The default ARIA label for previous month grid.
 */
declare function labelGrid(month: Date, options?: {
    locale?: Locale$1;
}): string;

/**
 * The default ARIA label for previous month button in navigation
 */
declare const labelPrevious: NavButtonLabel;

/**
 * The default ARIA label for the Weekday element.
 */
declare const labelWeekday: WeekdayLabel;

/**
 * The default ARIA label for the WeekNumber element.
 */
declare const labelWeekNumber: WeekNumberLabel;

/**
 * The default ARIA label for the WeekNumber element.
 */
declare const labelYearDropdown: () => string;

export { Calendar, CalendarProvider, Caption, CaptionLayout, CaptionProps, ClassNames, CustomComponents, CustomModifier, DataAttributes, DateAfter, DateBefore, DateFormatter, DateInterval, DateRange, DayClickEventHandler, DayContent, DayContentProps, DayEventHandler, DayFocusEventHandler, DayGridCell, DayGridCellProps, DayKeyboardEventHandler, DayLabel, DayMouseEventHandler, DayOfWeek, DayPicker, DayPickerBaseProps, DayPickerCalendar, DayPickerContext, DayPickerDay, DayPickerMonth, DayPickerMultiProps, DayPickerNoneProps, DayPickerProps, DayPickerProvider, DayPickerProviderProps, DayPickerRangeProps, DayPickerSelectedValue, DayPickerSingleProps, DayPickerWeek, DayPointerEventHandler, DaySelectEventHandler, DayTouchEventHandler, DaysSelectionMode, Formatters, InputDayPickerProps, InputHTMLAttributes, InternalModifier, InternalModifiersElement, Labels, Matcher, MatchingModifiers, Modifiers, ModifiersClassNames, ModifiersStyles, MonthCaption, MonthCaptionProps, MonthChangeEventHandler, MonthGrid, MonthGridProps, MonthLabel, Nav, NavButtonLabel, Row, RowProps, SelectMultipleEventHandler, SelectRangeEventHandler, SelectSingleEventHandler, StyledComponent, StyledElement, Styles, UseInputOptions, UseInputValue, WeekNumberClickEventHandler, WeekNumberFormatter, WeekNumberLabel, WeekNumberRowHeader, WeekNumberRowHeaderProps, WeekRow, WeekRowProps, WeekdayColumnHeader, WeekdayColumnHeaderProps, WeekdayLabel, WeekdaysRow, calendarContext, dayPickerContext, formatCaption, formatDay, formatMonthCaption, formatWeekNumber, formatWeekdayName, formatYearCaption, isDateAfterType, isDateBeforeType, isDateInterval, isDateRange, isDayOfWeekType, labelDay, labelGrid, labelMonthDropdown, labelNext, labelPrevious, labelWeekNumber, labelWeekday, labelYearDropdown, useCalendar, useDayPicker, useInput };

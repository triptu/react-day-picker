import React from 'react';

import { format } from 'date-fns';
import { DayGridCellProps, DayPicker, MonthGridProps } from 'react-day-picker';

function CustomMonthGrid(props: MonthGridProps) {
  return <div role="grid">{props.month.toISOString()}</div>;
}

function CustomDayGridCell(props: DayGridCellProps) {
  return (
    <div {...props}>
      <span>Wrap:</span>
      {props.children}
    </div>
  );
}

export default function Example() {
  const [selected, setSelected] = React.useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <main>
      <DayPicker
        showWeekNumber
        data-test="1"
        mode="single"
        numberOfMonths={3}
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
    </main>
  );
}

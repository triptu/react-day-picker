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

  return (
    <DayPicker
      data-test="1"
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
}

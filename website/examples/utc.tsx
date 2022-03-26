import React from 'react';

import { DayPicker } from 'react-day-picker';

export default function Example() {
  const date = new Date('2022-02-9T00:00:00+00');

  const [selected, setSelected] = React.useState<Date>(date);

  const footer = selected.toString();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      defaultMonth={date}
    />
  );
}

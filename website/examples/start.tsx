import React from 'react';

import { DayPicker } from 'react-day-picker';

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

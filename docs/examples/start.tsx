import React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Example() {
  const [selected, setSelected] = React.useState<Date>();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}

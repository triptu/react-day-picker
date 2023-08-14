import React from 'react';

import { useMDXComponents } from 'nextra/mdx';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Example() {
  const [selected, setSelected] = React.useState<Date>();
  const components = useMDXComponents();
  return (
    <>
      <components.pre
        className="shiki"
        data-language="tsx"
        data-line-numbers="true"
      >
        {`const test = 1`}
      </components.pre>
      <DayPicker
        data-test="1"
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
    </>
  );
}

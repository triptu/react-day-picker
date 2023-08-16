import React from 'react';

import { Pre as NextraPre } from 'nextra/components';

// TODO: see https://github.com/shuding/nextra/discussions/2167
export function Pre(props: React.ComponentProps<typeof NextraPre>) {
  return <NextraPre {...props} />;
}

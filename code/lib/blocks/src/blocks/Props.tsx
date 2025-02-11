import React, { ComponentProps } from 'react';
import deprecate from 'util-deprecate';
import { dedent } from 'ts-dedent';
import { ArgsTable } from './ArgsTable';
import { PRIMARY_STORY } from './types';

export const Props = deprecate(
  (props: ComponentProps<typeof ArgsTable>) => <ArgsTable {...props} />,
  dedent`
    Props doc block has been renamed to ArgsTable.

    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed
  `
);

// @ts-ignore
Props.defaultProps = {
  of: PRIMARY_STORY,
};

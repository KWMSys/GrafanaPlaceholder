import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder.addBooleanSwitch({
    name: 'Show on mobile',
    path: 'showMobile',
    defaultValue: false,
    description: 'If this is false, the panel will be hidden on mobile',
  });
});

import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = props => {
  let { options, width, height } = props;
  const styles = getStyles();

  // This is a hacky way of getting there... But if works ¯\_(ツ)_/¯
  if (!options.showMobile) {
    let style = document.getElementById('custom-styles-panel-' + props.id);
    if (!style) {
      style = document.createElement('style');
      style.id = 'custom-styles-panel-' + props.id;
      document.head.appendChild(style);
    }
    style.innerHTML = `
    @media (max-width: 768px) {
      div#panel-${props.id} { 
        z-index: -99999999!important;
        height: 0px!important;
        overflow: hidden!important;
        display: none!important;
      }
    }
    `;
  } else {
    let style = document.getElementById('custom-styles-panel-' + props.id);
    if (style) {
      style.parentNode?.removeChild(style);
    }
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    ></div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
  };
});

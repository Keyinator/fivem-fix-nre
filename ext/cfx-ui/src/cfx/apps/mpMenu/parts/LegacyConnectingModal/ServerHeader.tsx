import {
  Box,
  Flex,
  Pad,
  ui,
} from '@cfx-dev/ui-components';
import { observer } from 'mobx-react-lite';

import { ServerIcon } from 'cfx/common/parts/Server/ServerIcon/ServerIcon';
import { ServerTitle } from 'cfx/common/parts/Server/ServerTitle/ServerTitle';
import { IServerView } from 'cfx/common/services/servers/types';

export interface ServerHeaderProps {
  server: IServerView;
}
export const ServerHeader = observer(function ServerHeader(props: ServerHeaderProps) {
  const {
    server,
  } = props;

  return (
    <Box style={getStyle(server)}>
      <Pad top size="xlarge" />

      <Pad size="large">
        <Flex vertical gap="large">
          <Flex centered="axis">
            <ServerIcon type="details" size="small" server={server} />

            <Flex vertical>
              <ServerTitle size="xxlarge" title={server.projectName || server.hostname} />
            </Flex>
          </Flex>
        </Flex>
      </Pad>
    </Box>
  );
});

function getStyle(server: IServerView): React.CSSProperties {
  const clr = ui.color('main', 'pure', 0.25);
  const clr2 = ui.color('main', 'pure', 0.9);
  const clr3 = ui.color('main');

  const images = [`linear-gradient(${clr}, ${clr2} 75%, ${clr3})`, `url(${server.bannerConnecting})`];

  return {
    // margin: '2px 2px 0 2px',
    backgroundImage: images.join(','),
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };
}

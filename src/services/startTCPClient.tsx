/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import TcpSocket from 'react-native-tcp-socket';

export type ServerAddress = {
  address: string;
  port: number;
};

let client: TcpSocket.Socket | null = null;

export function startTCPClient(server: ServerAddress) {
  const options = {
    port: server.port,
    host: server.address,
    reuseAddress: true,
  };

  client = TcpSocket.createConnection(options, () => {
    // Write on the socket
    client?.write('Hello server!');
  });

  client?.on('data', function(data) {
    console.log('message was received', data);
  });

  client?.on('error', function(error) {
    console.log(error);
  });

  client?.on('close', function() {
    console.log('Connection closed!');
  });
}

export function closeTCPClientConnection() {
  if (client) {
    client.destroy();
    console.log('Connection closed by user');
    client = null;
  }
}


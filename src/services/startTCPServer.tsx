/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import TcpSocket from 'react-native-tcp-socket';
import { generateUnusedOptions } from '../functions/generateUnusedOptions';
import { ServerAddress } from '../types/ServerAddress';

export async function startTCPServer(): Promise<ServerAddress | null> {
  console.log('starting')
  const options = await generateUnusedOptions();
  const server = TcpSocket.createServer(function(socket) {
    socket.on('data', (data) => {
      socket.write('Echo server ' + data);
    });

    socket.on('error', (error) => {
      console.log('An error ocurred with client socket ', error);
    });

    socket.on('close', (error) => {
      console.log('Closed connection with ', socket.address());
    });
  });

  return new Promise<ServerAddress | null>((resolve) => {
    server.listen({ port: options.port, host: options.localAddress }, () => {
      server.getConnections((err, connections) => {
        console.log(connections.toString());
      });

      server.on('error', (error) => {
        console.log('An error ocurred with the server', error);
      });

      server.on('close', () => {
        console.log('Server closed connection');
      });

      const serverAddress: ServerAddress = {
        address: options.localAddress,
        port: options.port,
      };

      resolve(serverAddress);
    });
  });
}

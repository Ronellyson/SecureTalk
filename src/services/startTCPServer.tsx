/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import TcpSocket from 'react-native-tcp-socket';
import { ServerAddress } from '../types/ServerAddress';
import findAvailablePortForServer from '../functions/findAvailablePortForServer';

export async function startTCPServer(): Promise<ServerAddress | null> {
  const address = '128.0.0.1';
  const port = await findAvailablePortForServer(address, 1024, 2000);

  if (port === null) {
    console.error('Nenhuma porta disponível encontrada.');
    return null;
  }

  const server = TcpSocket.createServer((socket) => {
    socket.on('data', (data) => {
      socket.write('Echo server ' + data);
    });

    socket.on('error', (error) => {
      console.log('Ocorreu um erro com o socket do cliente:', error);
    });

    socket.on('close', () => {
      console.log('Conexão fechada com', socket.address());
    });
  });

  server.on('error', (error) => {
    console.log('Ocorreu um erro com o servidor:', error);
  });

  server.on('close', () => {
    console.log('Servidor fechou a conexão');
  });

  server.listen({ port, host: address }, () => {
    console.log('Servidor escutando na porta:', port);
  });

  const serverAddress: ServerAddress = {
    address,
    port,
  };

  return serverAddress;
}

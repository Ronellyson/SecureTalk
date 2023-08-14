/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import TcpSocket from 'react-native-tcp-socket';

async function findAvailablePortForServer(targetIP: string, startPort: number, endPort: number): Promise<number | null> {
  for (let port = startPort; port <= endPort; port++) {
    const isPortFree = await isPortAvailable(targetIP, port);
    if (isPortFree) {
      return port; // Retorna a porta disponível
    }
  }

  return null; // Retorna null se nenhuma porta estiver disponível
}

async function isPortAvailable(host: string, port: number): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    const client = TcpSocket.createConnection(
      {
        port,
        host,
      },
      () => {
        // console.log(`Connection established to host: ${host}, port: ${port}`);
        client.destroy();
        resolve(false); // Port está ocupada
      }
    );

    client.on('error', () => {
      // console.log(`Error connecting to host: ${host}, port: ${port}`);
      resolve(true); // Port está disponível
    });

    // Se a conexão for estabelecida com sucesso, o evento 'close' pode não ser acionado em alguns casos.
    // Nesse caso, podemos definir um timeout para lidar com isso.
    setTimeout(() => {
      if (!client.destroyed) {
        client.destroy();
        // console.log(`Connection timed out, host: ${host}, port: ${port}`);
        resolve(false); // Port está ocupada
      }
    }, 1000); // Ajuste o valor do timeout conforme necessário
  });
}

export default findAvailablePortForServer;


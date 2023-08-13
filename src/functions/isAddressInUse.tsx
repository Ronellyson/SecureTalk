import TcpSocket from 'react-native-tcp-socket';

export async function isAddressInUse(host: string, port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const client = TcpSocket.createConnection({ port, host }, () => {
      // Se a conexão for bem-sucedida, o endereço está em uso
      client.destroy();
      resolve(true);
    });

    client.on('error', (error) => {
      if (error.name === 'ECONNREFUSED') {
        // Se a conexão for recusada, o endereço não está em uso
        resolve(false);
      } else {
        // Outros erros podem indicar que o endereço está em uso
        resolve(true);
      }
    });
  });
}

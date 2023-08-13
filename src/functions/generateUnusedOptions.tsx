import { isAddressInUse } from "./isAddressInUse";

export async function generateUnusedOptions() {
    const basePort = 9090; // O número base da porta que você deseja usar
    let port = basePort;
    let localAddress = '127.0.0.20';
  
    while (await isAddressInUse(localAddress, port)) {
      port++;
      localAddress = `127.0.0.${Math.floor(Math.random() * 256)}`;
    }
  
    const options = {
      port,
      localAddress,
      reuseAddress: true,
    };
  
    return options;
  }
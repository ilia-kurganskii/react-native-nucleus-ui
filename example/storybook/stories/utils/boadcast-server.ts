import { WebSocketServer } from 'ws';

export class BroadcastServer {
  private websocketServer?: WebSocketServer;

  constructor(private readonly port: number) {}

  start = () => {
    this.websocketServer = new WebSocketServer({ port: this.port });

    this.websocketServer.on('connection', (webSocket) => {
      webSocket.on('message', (data, isBinary) => {
        this.websocketServer?.clients.forEach((client) => {
          if (client !== webSocket && client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: isBinary });
          }
        });
      });
    });
  };

  stop = async () => {
    return new Promise<void>((resolve, reject) => {
      this.websocketServer?.clients.forEach((client) => client.close());
      this.websocketServer?.close((err) => {
        err ? reject(err) : resolve();
      });
    });
  };
}

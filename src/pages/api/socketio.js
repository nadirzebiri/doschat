import { Server } from "socket.io";

const ioHandler = (req, res) => {
	if (!res.socket.server.io) {
		console.log("*First use, starting socket.io");

		const io = new Server(res.socket.server);

		io.on("connection", (socket) => {
			socket.on("sendMessage", (data) => {
				socket.broadcast.emit("sendMessage", data);
			});
		});
		res.socket.server.io = io;
	} else {
		console.log("socket.io already running");
	}
	res.end();
};

export const config = {
	api: {
		bodyParser: false,
	},
};

export default ioHandler;

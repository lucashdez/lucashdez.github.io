//! By convention, main.zig is where your main function lives in the case that
//! you are building an executable. If you are making a library, the convention
//! is to delete this file and start with root.zig instead.
const std = @import("std");
const net = std.net;
const fs = std.fs;

fn handle_request(connection: net.Server.Connection) !void {
    _ = connection.address.getPort();
    var reader = connection.stream.reader();
    var buffer: [1024]u8 = undefined;
    const bytes_read = try reader.readAll(&buffer);
    const request = buffer[0..bytes_read];
    const method_end = std.mem.indexOf(u8, request, " ") orelse return;
    const method = request[0..method_end];
    if (std.mem.eql(u8, method, "GET")) {
        std.debug.print("GOT A GET\n", .{});
        std.debug.print("Got bytes: {s}\n", .{request});
    }
}

pub fn main() !void {
    const ip: []const u8 = "127.0.0.1";
    const address = try net.Address.parseIp4(ip, 80);
    var listener = try net.Address.listen(address, .{});
    defer listener.deinit();

    std.debug.print("Server listening at: {s}", .{ip});

    while (true) {
        var stream = try listener.accept();
        defer stream.stream.close();

        handle_request(stream) catch |err| {
            std.debug.print("Error al manejar la solicitud: {}\n", .{err});
        };
    }
}

    // Output a prompt
    var command = require('./commands.js');

    process.stdout.write('prompt > ');
    // The stdin 'data' event fires after a user types in a line
    process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remove the newline
      command.pwd(cmd);
      command.ls(cmd);
      command.echo(cmd);
      command.cat(cmd);
      command.head(cmd);
      command.tail(cmd);
      // command[cmd]()
      if (cmd === 'date') {

        process.stdout.write(Date());
      }
      process.stdout.write('\nprompt > ');
    });
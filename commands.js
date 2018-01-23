var fs = require('fs');
var readline = require('readline');

var pwd = function (input) {
    if (input === 'pwd') {
        process.stdout.write(process.cwd());
    }
}

var ls = function (input) {
    if (input === 'ls') {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                process.stdout.write(file.toString() + "\n");
            })
        })
    }
};

var echo = function (input) {
    if (input.slice(0, 4) == 'echo') {
        process.stdout.write(input.slice(5))
    }

};

var cat = function (input) {
    if (input.slice(0, 3) == 'cat') {
        var filename = input.slice(4)
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                throw 'ouch!'
            }
            console.log(data)

        })
    }
}

var head = function (input) {
    if (input.slice(0, 4) == 'head') {
        var filename = input.slice(5).trim();
        var arr = []
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                throw 'ouch!'
            }
            arr = data.split('\n')
            console.log(arr.splice(0, 5).join('\n'))
        })

    };



}

var tail = function (input) {
    if (input.slice(0, 4) == 'tail') {
        var filename = input.slice(5)
        var arr = []
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                throw 'ouch!'
            }
            arr = data.split('\n')
            console.log(arr.splice(-5).join('\n'))
        })
    }
}

module.exports = {
    pwd: pwd,
    ls: ls,
    echo: echo,
    cat: cat,
    head: head,
    tail: tail
}
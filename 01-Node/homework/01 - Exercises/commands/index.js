const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print, args) {
    print (process.cwd())
}

function date(print, args) {
    print(Date())
}

function echo(print, args) {
    print(args.join(""))
}

function ls(print, args) {
    fs.readdir(".", "utf-8", (err, files)=> {
        if (err) throw Error(err)
        print (files.join(""))
    })
}

function cat(print, args) {
fs.readFile(args[0], "utf-8", (err, data) =>{
    if (err) throw Error(err)
    print (data)
})
}
function head(print, args) {

fs.readFile(args.join(""), "utf-8", (err, data) =>{
    if (err) throw Error(err)
    print (data.split("\n")[0])
    //print (data.split("\n").splice(0, 1).join(""))
})

}
function tail(print, args) {}

function curl(print, args) {}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};

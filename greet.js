module.exports = function greet(name)
{
    if (name == "") {
        return 'Hello, My Friend';
    }else{
        return 'Hello, ' + name;
    }
}
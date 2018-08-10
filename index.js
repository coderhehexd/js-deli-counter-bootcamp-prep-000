var takeANumber = (line, name) =>{
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length } in line.`
};

var nowServer = (line) =>{
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var serving = line[0]
    line.shift()
    return serving
  }
};
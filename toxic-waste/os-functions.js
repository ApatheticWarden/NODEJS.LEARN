const os = require("os");

const user = os.userInfo();
console.log(user);

// returning system work-time in sec

console.log(`The System Uptime is ${os.uptime()} seconds `);

const currentOS = {
  name: os.type(),
  release: os.release(),
  ttlMem: os.totalmem(),
  frMem: os.freemem(),
};

console.log(currentOS);

console.log("this is not required and will fail after 3 minutes");

setTimeout(() => {
  process.exit(1);
}, 3 * 60 * 1000);

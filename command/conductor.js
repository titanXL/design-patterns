class Conductor {
  run(command) {
    console.log(`Executin command ${command.name}`);
    command.execute();
  }
}

module.exports = new Conductor();

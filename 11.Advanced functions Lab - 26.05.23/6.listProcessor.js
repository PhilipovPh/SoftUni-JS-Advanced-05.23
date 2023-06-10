function listProcessor(commands) {
    let collection = [];
  
    for (let command of commands) {
      let [action, value] = command.split(' ');
  
      if (action === 'add') {
        collection.push(value);
      } else if (action === 'remove') {
        collection = collection.filter(item => item !== value);
      } else if (action === 'print') {
        console.log(collection.join(','));
      }
    }
  }
  
  // Example usage:
  listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
  listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
  
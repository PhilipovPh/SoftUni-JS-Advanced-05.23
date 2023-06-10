function objectManager() {
    const objects = {};
  
    function create(name, parentName) {
      if (parentName) {
        const parent = Object.assign({}, objects[parentName]);
        objects[name] = parent;
      } else {
        objects[name] = {};
      }
    }
  
    function set(name, key, value) {
      objects[name][key] = value;
    }
  
    function print(name) {
      const object = objects[name];
      const properties = [];
  
      for (let key in object) {
        properties.push(`${key}:${object[key]}`);
      }
  
      console.log(properties.join(','));
    }
  
    return {
      create,
      set,
      print
    };
  }
  
  // Example usage:
  const manager = objectManager();
  manager.create('c1');
  manager.create('c2', 'c1');
  manager.set('c1', 'color', 'red');
  manager.set('c2', 'model', 'new');
  manager.print('c1'); // color:red
  manager.print('c2'); // model:new,color:red
  
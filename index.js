function myEach(collection, callback) {
    //Here we verify if the collection is an array before
  if (Array.isArray(collection)) {
    collection.forEach(element => {
      callback(element);
    });
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        const value = collection[key];
        callback(value);
      }
    }
  } else {
    throw new Error('Expected an array or object as input');
  }

  return collection; // Return the original collection
}

function myMap(collection, callback) {
  if (Array.isArray(collection)) {
    return collection.map(callback);
  } else if (typeof collection === 'object' && collection !== null) {
    const mappedObject = {};
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        const value = collection[key];
        mappedObject[key] = callback(value);
      }
    }
    return mappedObject;
  } 
}

function myReduce(collection, callback, initialValue) {
  if (Array.isArray(collection)) {
    return initialValue !== undefined ? collection.reduce(callback, initialValue) : collection.reduce(callback);
  } else if (typeof collection === 'object' && collection !== null) {
    const keys = Object.keys(collection);
    let accumulator = initialValue !== undefined ? initialValue : collection[keys[0]];
    const startIdx = initialValue !== undefined ? 0 : 1;

    for (let i = startIdx; i < keys.length; i++) {
      const key = keys[i];
      accumulator = callback(accumulator, collection[key], key, collection);
    }

    return accumulator;
  } 
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    return collection.find(predicate);
  } else if (typeof collection === 'object' && collection !== null) {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key], key, collection)) {
        return collection[key];
      }
    }
    return undefined;
  } else {
    throw new Error('Expected an array or object as input');
  }
}

function myFilter(collection, predicate) {
  if (Array.isArray(collection)) {
    return collection.filter(predicate);
  } else if (typeof collection === 'object' && collection !== null) {
    const filteredObject = {};
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
        filteredObject[key] = collection[key];
      }
    }
    return filteredObject;
  } 
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === 'object' && collection !== null) {
    return Object.keys(collection).length;
  } 
}

function myFirst(collection, n = 1) {
  if (Array.isArray(collection)) {
    return collection.slice(0, n);
  } else if (typeof collection === 'object' && collection !== null) {
    const keys = Object.keys(collection);
    return keys.slice(0, n).map(key => collection[key]);
  } 
}

function myLast(collection, n = 1) {
  if (Array.isArray(collection)) {
    return collection.slice(-n);
  } else if (typeof collection === 'object' && collection !== null) {
    const keys = Object.keys(collection);
    const startIdx = Math.max(keys.length - n, 0);
    return keys.slice(startIdx).map(key => collection[key]);
  } 
}

function myKeys(collection) {
  if (typeof collection === 'object' && collection !== null) {
    return Object.keys(collection);
  } 
}

function myValues(collection) {
  if (typeof collection === 'object' && collection !== null) {
    return Object.values(collection);
  } 
}

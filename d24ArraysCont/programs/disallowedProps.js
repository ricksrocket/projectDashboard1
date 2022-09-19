


const person = {
    firstName: 'Orpheus',
    lastName: 'De Jong',
    phone: '+1 123-456-7890',
    email: 'fake@email.tld',
  };
  
  const allowedProperties = ['firstName', 'lastName'];
  
  const allKeys = Object.keys(person);
  const result = allKeys.reduce((next, key) => {
    if (allowedProperties.includes(key)) {
        return { ...next, [key]: person[key] };
    } else {
        return next;
    }
  }, {});
  
  // result:
  // { firstName: 'Orpheus', lastName: 'De Jong' }
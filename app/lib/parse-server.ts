// import Parse from 'parse';
const Parse = require('parse/node')
Parse.initialize("APPLICATION_ID", "MASTER_KEY");
Parse.serverURL = 'http://39.101.76.38:1337/parse'

const createObject = async () => {
  const MyCustomClass = Parse.Object.extend("MyCustomClass");
  const myCustomObject = new MyCustomClass();

  myCustomObject.set("field1", "value1");
  myCustomObject.set("field2", "value2");

  try {
    const result = await myCustomObject.save();
    console.log('Object created', result);
  } catch (error) {
    console.error('Error while creating ParseObject: ', error);
  }
};

const readObjects = async () => {
  const MyCustomClass = Parse.Object.extend("MyCustomClass");
  const query = new Parse.Query(MyCustomClass);
  try {
    const results = await query.find();
    const plainResults = results.map((obj: any) => obj.toJSON());
    return plainResults
  } catch (error) {
    console.error('Error while fetching ParseObjects: ', error);
  }
};

const updateObject = async (objectId: string) => {
  const MyCustomClass = Parse.Object.extend("MyCustomClass");
  const query = new Parse.Query(MyCustomClass);

  try {
    const object = await query.get(objectId);
    object.set("field1", "new value");
    await object.save();
    console.log('Object updated');
  } catch (error) {
    console.error('Error while updating ParseObject: ', error);
  }
};

const deleteObject = async (objectId: string) => {
  const MyCustomClass = Parse.Object.extend("MyCustomClass");
  const query = new Parse.Query(MyCustomClass);

  try {
    const object = await query.get(objectId);
    await object.destroy();
    console.log('Object deleted');
  } catch (error) {
    console.error('Error while deleting ParseObject: ', error);
  }
};

export { createObject, readObjects, updateObject, deleteObject }


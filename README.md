# design-patterns

A collection of design patterns

- Singleton - We can use either a class to check if an instance has been instantiated or just export a new instance of the class that needs to be a singleton, which will be then cached by the module system.
- Prototype - When a repetion of actions is at hand, we can use this pattern and centrelize the repetetive actions. Implemented by copy the instance prototype and creating a new object from that prototype and finally copying all current class properties.
- Factory - Encaplustes everything we need to create a instance in one method.
- Builder - Break down the construction of a complex object into separate concerns.
- Adapter - Convert an interface of a class into another. Allows classes to work togheter that couldnt otherwise because of incompatible interfaces.
- Proxy - Object controlling access to another object.
- Composite - Composite lets clients treat individual object and compositions of objects uniformly.
- Decorators - Allows attaching additional methods and properties to exisiting objects.
- Chain of Responsibility - Chain togheter objects to handle a request, which can return a result or pass the request to another object.
- Command: Commands are objects that contain all of the necessary data to execute a specific action on the client.
- Iterator: Design to work with collections of data, giving us a clear way to iterate any collection.
- Observer: Define a one-to-many dependency between objects, so when one objects state changes, all its dependants are notified and updated automatically.
- Strategy: Lets you create multiple alghoritms for a specific task and decide at runtime which one to use.

Offtopic: path normalization needed for windows machines.

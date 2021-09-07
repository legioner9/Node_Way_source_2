


















the example:

method(path, data[, options], callback)

Declaration elements (fields):

- path \<string> | \<Buffer> | \<URL> | \<number> filename or file descriptor
- data \<string> | \<Buffer>
- options \<Object> | \<string>
  - encoding \<string> | \<null> Default: 'utf8'
  - mode \<integer> Default: 0o666
  - flag \<string> See support of file system flags. Default: 'a'.
- callback \<Function>
  - err \<Error>

```js
({
  access: 'public',

  method: async ({ person, address }) => {
    const addressId = await api.gs.create(address);
    person.address = addressId;
    const personId = await api.gs.create(person);
    return personId;
  },
});
```
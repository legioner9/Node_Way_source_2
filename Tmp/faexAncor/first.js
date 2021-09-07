'use strict';

const a = () => {
  const obj = { o: 'o' };
  a.get = () => obj;
  a.obj = obj;
};
debugger
a();
const i = a.get() === a.obj;
debugger

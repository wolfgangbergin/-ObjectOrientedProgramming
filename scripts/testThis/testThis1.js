const kimObject = {
  firstName: 'kim313',
  kimFunc1() {
    l(this.firstName);
  },
  kimFunc2() {
    let banana313 = 'banana';
    (() => {
      l(banana313);
    })();
  },
};

kimObject.kimFunc1();
kimObject.kimFunc2();

const scripting = 'scipts';

export default scripting;

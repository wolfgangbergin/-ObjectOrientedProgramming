const kimObject = {
  firstName: 'kim248',
  kimFunc1() {
    l(this.firstName);
  },
  kimFunc2() {
    let banana313 = 'banana';
    
   return () => {
      l(this.firstName);
    };
  },
};

const wolfObject = {
    firstName: 'wolf313',
    wolfFunc1: kimObject.kimFunc1,
    wolfFunc2: kimObject.kimFunc2(),
  
  };

// kimObject.kimFunc1();
// kimObject.kimFunc2()();

wolfObject.wolfFunc1();
wolfObject.wolfFunc2();

const scripting = 'scipts';

export default scripting;

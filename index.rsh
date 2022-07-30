'reach 0.1';

const COUNTVALUE = 30;

const countDown = {
  showCountDown: Fun([UInt], Null),
}

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...countDown,
    inherit: UInt,
    getAction: Fun([], Bool),
  });

  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...countDown,
    boolTerms: Fun([UInt], Bool),
  });
  init();
  // The first one to publish deploys the contract
  A.only(() => {
    const value = declassify(interact.inherit)
  })
  A.publish(value)
  .pay(value);
  commit();
  // The second one to publish always attaches
  B.only(() => {
    const terms = declassify(interact.boolTerms(value));
  })
  B.publish(terms);
  commit();

  each([A, B], () => {
    interact.showCountDown(COUNTVALUE);
  })

  A.only(() => {
    const state = declassify(interact.getAction());
  })
  A.publish(state)

  state ? transfer(value).to(A) : transfer(value).to(B);
  // write your program here
  commit()
  exit();
});

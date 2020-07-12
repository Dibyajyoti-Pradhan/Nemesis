const betweenDates = (start, end = new Date()) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const randomDate = () =>
  betweenDates(new Date(2020, 6, 1))
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ');

const randomTime = () =>
  betweenDates(new Date(2020, 5, 1)).toTimeString().split(' ')[0];

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const numbers = '1234567';

const getRandomDateTime = () => ({
  date: randomDate(),
  time: randomTime(),
});

const createId = (length, randomString) =>
  [...new Array(length)].reduce(
    (accString) =>
      (accString += randomString.charAt(
        Math.floor(Math.random() * randomString.length),
      )),
    '',
  );

const creatRandomString = () => createId(8, characters);
const creatRandomNumber = () => createId(Date.now() % 2 === 0 ? 3 : 2, numbers);

export const getRandomMerchantData = () => ({
  [randomDate()]: {
    merchantId: `A2${creatRandomString()}`,
    transactionId: `TXN${creatRandomString()}`,
    amount: `${creatRandomNumber()}`,
    transactionStatus: 'SUCCESS',
    storeName: 'Arun devo',
    cardDisplayDate: randomDate(),
    cardDisplayTime: randomTime(),
    displayDate: randomDate(),
    displayTime: randomTime(),
    timestamp: `15898${createId(9, numbers)}`,
    payerVPAHandle: `${createId(2, characters)}******${createId(
      2,
      numbers,
    )}@apl`,
  },
});

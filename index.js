const { Op } = require('sequelize');
const { sequelize, Phone } = require('./models');


// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync ok'))
//   .catch(err => console.log('err', err));


// Тестові данні
// (async function () {
//     const phones = [
//         {
//             brand: 'Samsung',
//             model: 'Galaxy S21',
//             manufacturedYear: 2021,
//             ramSize: 8,
//             cpu: 'Exynos 2100',
//             screenDiagonal: 6.2,
//             isNfc: false
//           },
//           {
//             brand: 'Xiaomi',
//             model: 'Redmi Note 10',
//             manufacturedYear: 2020,
//             ramSize: 6,
//             cpu: 'Snapdragon 678',
//             screenDiagonal: 6.4,
//             isNfc: true
//           },
//           {
//             brand: 'Huawei',
//             model: 'P40',
//             manufacturedYear: 2020,
//             ramSize: 8,
//             cpu: 'Kirin 990',
//             screenDiagonal: 6.1,
//             isNfc: false
//           },
//           {
//             brand: 'Apple',
//             model: 'iPhone 6',
//             manufacturedYear: 2014,
//             ramSize: 1,
//             cpu: 'A8',
//             screenDiagonal: 4.7,
//             isNfc: false
//           },
//           {
//             brand: 'Nokia',
//             model: '3310',
//             manufacturedYear: 2010,
//             ramSize: 0,
//             cpu: 'None',
//             screenDiagonal: 1.5,
//             isNfc: false
//           },
//           {
//             brand: 'Motorola',
//             model: 'Razr',
//             manufacturedYear: 2010,
//             ramSize: 0,
//             cpu: 'Unknown',
//             screenDiagonal: 2.2,
//             isNfc: false
//           },
//           {
//             brand: 'Google',
//             model: 'Pixel 5',
//             manufacturedYear: 2021,
//             ramSize: 8,
//             cpu: 'Snapdragon 765G',
//             screenDiagonal: 6.0,
//             isNfc: false
//           },
//           {
//             brand: 'Sony',
//             model: 'Xperia 1 II',
//             manufacturedYear: 2020,
//             ramSize: 8,
//             cpu: 'Snapdragon 865',
//             screenDiagonal: 6.5,
//             isNfc: true
//           },
//           {
//             brand: 'LG',
//             model: 'G7 ThinQ',
//             manufacturedYear: 2018,
//             ramSize: 4,
//             cpu: 'Snapdragon 845',
//             screenDiagonal: 6.1,
//             isNfc: false
//           },
//           {
//             brand: 'Asus',
//             model: 'ROG Phone 5',
//             manufacturedYear: 2021,
//             ramSize: 16,
//             cpu: 'Snapdragon 888',
//             screenDiagonal: 6.78,
//             isNfc: false
//           },
//           {
//             brand: 'HTC',
//             model: 'Desire 820',
//             manufacturedYear: 2014,
//             ramSize: 2,
//             cpu: 'Snapdragon 615',
//             screenDiagonal: 5.5,
//             isNfc: false
//           }
//     ]
//     for (const phone of phones) {
//         const createdPhone = await Phone.create(phone)
//         console.log('createdPhone', createdPhone.get)
//     }
// }) ();


// додавання нового телефону,
(async function () {
      // const newPhone = {
      //     brand: 'Apple',
      //     model: 'iPhone 13',
      //     manufacturedYear: 2021,
      //     ramSize: 4,
      //     cpu: 'A15 Bionic',
      //     screenDiagonal: 6.1,
      //     isNfc: false
      // }
      // const createdPhone = await Phone.create(newPhone)
      // console.log('createdPhone', createdPhone.get())


  // отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці,
  // упорядкованих за роком виробництва),
  // const foundPhones = await Phone.findAll({
  //     raw: true,
  //     order: [['manufacturedYear', 'DESC']],
  //     limit: 4,
  //     offset: 8
  // })
  // console.log('foundPhones', foundPhones)


  // *отримання списку телефонів певного року видання,
  // const foundPhones = await Phone.findAll({
  //     raw: true,
  //     where: {
  //         manufacturedYear: 2021
  //     }
  // })
  // console.log('foundPhones', foundPhones)


  // *отримання списку телефонів старше 2020 року випуску,
  // const foundPhones = await Phone.findAll({
  //     raw: true,
  //     where: {
  //         manufacturedYear: {
  //             [Op.lt]: 2020
  //         }
  //     }
  // })
  // console.log('foundPhones', foundPhones)


  // оновлення: змінити розмір оперативної пам'яті телефону з id: 1,
  // const updatedPhone = await Phone.update(
  //     { ramSize: 6 },
  //     {where: {id: 1}, raw: true, returning: true}
  // )
  // console.log('updatedPhone', updatedPhone[1][0])


  // *оновлення: додати нфс всім телефонам 2021 року випуску,
  // const updatedPhones = await Phone.update(
  //     { isNfc: true},
  //     {where: {manufacturedYear: 2021}, raw: true, returning: true}
  // )
  // console.log('updatedPhones', updatedPhones)


  // видалення телефону з id: 2.
  // const deletedPhoneCount = await Phone.destroy({ where: { id: 2 } });
  // console.log('deletedPhoneCount', deletedPhoneCount)


  // *видалення телефонів 2010 року випуску.
  // const deletedPhonesCount = await Phone.destroy({
  //   where: { manufacturedYear: 2010 },
  // });
  // console.log('deletedPhonesCount', deletedPhonesCount);
})();

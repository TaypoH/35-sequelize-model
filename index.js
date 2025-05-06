const { Op } = require('sequelize');
const { sequelize, Phone } = require('./models');

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

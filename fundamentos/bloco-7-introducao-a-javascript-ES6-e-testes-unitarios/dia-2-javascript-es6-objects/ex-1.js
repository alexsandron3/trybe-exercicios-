const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

console.log(Object.keys(order.order.pizza))

// const customerInfo = (order) => {
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const name = order.name;
//   const phoneNumber= order.phoneNumber;
//   const street = order.address.street;
//   const number = order.address.number;
//   const apartment = order.address.apartment;
//   const msg = `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº:${number}, AP:${apartment}`;
//   console.log(msg);
// };

// customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   order.name = 'Luiz Silva';
//   order.payment = 50;
//   const msg = `Olá ${order.name}, o total do seu pedido de margeritta, pepperoni e Coca-Cola Zero é R$ ${order.payment},00`;
//   console.log(msg);

// };

// orderModifier(order);
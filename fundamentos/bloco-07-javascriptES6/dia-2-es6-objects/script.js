//exercicios feitos com a mari saraiva e com o hugo daniel
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
  
  const customerInfo = (order) => {
      // Adicione abaixo as informações necessárias."Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
    return`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone:${order.phoneNumber}, R. ${order.address.street}, ${order.address.number}, AP: ${order.address.apartment}`;
  }
  
  // console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
    // Modifique o nome da pessoa compradora.
    // Modifique o valor total da compra para R$ 50,00.
    let novoObjeto = {};
    const novo = Object.assign(novoObjeto, order);
    novoObjeto.name = "Luiz Silva";
    novoObjeto.payment = 50
    console.log(novo);
    let nome = novoObjeto.name;
    let sabores = Object.keys(novoObjeto.order.pizza).join(', ');
    let bebida = novoObjeto.order.drinks.coke.type;
    let valor = novoObjeto.payment;
    return `Olá ${nome}, o total do seu pedido de ${sabores} e ${bebida} é de R$ ${valor},00.`
  }
  
  console.log(orderModifier(order));

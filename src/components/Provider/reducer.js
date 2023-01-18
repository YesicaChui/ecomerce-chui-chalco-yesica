export default function reducer(store, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD-TO-CART": {
      let orders = store.orders;
      console.log("valor de orders antes de payload")
      console.log(orders)
      console.log("--------")
      // Chequeo si el user ya hizo alguna orden
      if (orders.length === 0) {
        const order = {
          items: [],
          total: 0,
          purchased: false,
        };

        orders.push(order);
      }
      console.log("valor de orders despues de chequeo")
      console.log(orders)
      console.log("--------")

      const lastOrder = orders.length - 1;
      const currentOrder = orders[lastOrder];

      // Chequeo que si ya tiene una orden, la misma no haya sido comprada aún
      if (currentOrder.purchased) {
        const order = {
          items: [],
          total: 0,
          purchased: false,
        };

        orders.push(order);
      }

      orders[orders.length - 1].items.push(payload);
      orders[orders.length - 1].total += payload.cantidad * payload.precio;

      console.log("valor de orders despues de payload")
      console.log(orders)
      console.log("--------")
      return { orders };
    }

    case "REMOVE-FROM-ORDER": {
      const orders = store.orders;

      const lastOrder = orders.length - 1;
      const currentOrder = orders[lastOrder];

      currentOrder.items = currentOrder.items.filter(
        (item) => item.id !== payload.id
      );

      console.log({ currentOrder, id: payload.id });
      currentOrder.total = currentOrder.items.reduce(
        (total, item) => total + item.amount * item.price,
        0
      );

      orders[lastOrder] = currentOrder;

      return { orders };
    }

    case "PURCHASE-ORDER": {
      const orders = store.orders;

      const lastOrder = orders.length - 1;
      const currentOrder = orders[lastOrder];
      // OPCION 2
      //   let currentOrder = orders[lastOrder];

      currentOrder.buyer = payload;
      // *2
      //   currentOrder = Object.assign(currentOrder, { ...payload });
      currentOrder.purchased = true;

      orders[lastOrder] = currentOrder;

      return { orders };
    }

    default: {
      return store;
    }
  }
}

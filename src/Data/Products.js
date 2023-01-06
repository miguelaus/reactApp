import Images from "../Components/Images/Images";

const products = [
    {
      id: 1,
      name: "Pizza Caprese",
      price: 300,
      img: Images.caprese,
      type: "Plato",
      amount: 0,
      
    },
    {
      id: 2,
      name: "Pizza Margarita",
      price: 450,
      img: Images.margarita,
      type: "Plato",
      amount: 0,
    },
    {
      id: 3,
      name: "Pizza Primavera",
      price: 350,
      img: Images.primavera,
      type: "Plato"
      
    },
    {
      id: 4,
      name: "Pizza Cancha",
      price: 350,
      img: Images.cancha,
      type: "Plato",
      amount: 0
      
      
    },
    {
      id: 5,
      name: "Cerveza pinta",
      price: 350,
      img: Images.pinta,
      type: "Bebida",
      amount: 0


      
    },
    {
      id: 6,
      name: "Cerveza Botella",
      price: 350,
      img: Images.botellaC,
      type: "Bebida",
      amount: 0
      
    },
    {
      id: 7,
      name: "Vino Copa",
      price: 350,
      img: Images.copa,
      type: "Bebida",
      amount: 0
    
      
    },
    {
      id: 8,
      name: "Vino Botella",
      price: 350,
      img: Images.botellaV,
      type: "Bebida",
      amount: 0,
      
    },
    {
      id: 9,
      name: "Flan",
      price: 350,
      img: Images.flan,
      type: "Postre",
      amount: 0

      
    },
    {
      id: 10,
      name: "Fruta",
      price: 350,
      img: Images.fruta,
      type: "Postre",
      amount: 0
      
    },
    {
      id: 11,
      name: "Helado",
      price: 350,
      img: Images.Helado,
      type: "Postre",
      amount: 0
      
    },
    {
      id: 12,
      name: "Tiramisu",
      price: 350,
      img: Images.tiramisu,
      type: "Postre",
      amount: 0
      
    },


];

export const getProducts = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products);
            
        }, 2000);
    });
};
export const getProductsByCategory = (category) => {
    return new Promise((res) => {
  
        const productos = products.filter(product => product.type === category);
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
}
export const getProduct = (id) => {
  return new Promise((res) => {
      setTimeout(() => {
          res(products.find((item)=> item.id === parseInt(id)))
      }, 2000);
  })
};
const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyB58ki23Y-AAXHah-nI-7yy2Bw8Yfe6HoQ",
    authDomain: "olivia-shop.firebaseapp.com",
    projectId: "olivia-shop",
});

var db = firebase.firestore();


var productos = [
    {
      "_id": 1,
      "category": "Ropa",
      "image": "dress1.jpg",
      "title": "Vestido Naomi",
      "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
      "price": 2500,   
      },
      {
        "_id": 2,
        "category": "Zapatos",
        "image": "zapatos2.jpg",
        "title": "Zapatos de cuero color negro, super comodos",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        "price": 3000,
      },
      {
        "_id": 3,
        "category": "Accesorios",
        "image": "dress3.jpg",
        "title": "Mochila Paris",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",

        "price": 3500,
      },
      {
        "_id": 4,
        "category": "Zapatos",
        "image": "zapatos1.jpg",
        "title": "Zapatos de cuero color Nude, super comodos",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        "price": 4000,
        
      },
      {
        "_id": 5,
        "category": "Ropa",
        "image": "dress2.jpg",
        "title": "Vestido Sunset con Lunares amarillos",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        "price": 5500,
         
      },
      {
        "_id": 6,
        "category": "Accesorios",
        "image": "accesorio2.jpg",
        "title": "Mochila Roma",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        "price": 2200,
        
      },
      {
        "_id": 7,
        "category": "Ropa",
        "image": "dress4.jpg",
        "title": "Vestido Holly con Lunares blancos",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        "price": 5500,
         
      },
      {
        "_id": 8,
        "category": "Accesorios",
        "image": "accesorio3.jpg",
        "title": "Cinturon Malaga",
        "description": "Un cinturon de cuero que complementa bien con cualquier outfit",
        "price": 1500,
        
      },
      {
        "_id": 9,
        "category": "Accesorios",
        "image": "accesorio4.jpg",
        "title": "Cinturon Rustic",
        "description": "Un cinturon rustico que complementa bien con cualquier outfit",
        "price": 1800,
        
      },
      {
        "_id": 10,
        "category": "Accesorios",
        "image": "accesorio5.jpg",
        "title": "Vincha Rose",
        "description": "Una vincha que viste y complementa perfecto a cualquier hora",
        "price": 800,
                
      },
      {
        "_id": 11,
        "category": "Accesorios",
        "image": "accesorio6.jpg",
        "title": "Vincha Ruby",
        "description": "Una vincha clasica complementa perfecto",
        "price": 850,
                
      },
      {
        "_id": 12,
        "category": "Zapatos",
        "image": "zapatos3.jpg",
        "title": "Zapatilla Lola",
        "description": "Zapatilla de Cuero, divinas y comodas",
        "price": 4800,
        
      },
      {
        "_id": 13,
        "category": "Zapatos",
        "image": "zapatos4.jpg",
        "title": "Sandalia Malibú",
        "description": "Sandalia de cuero comoda y perfecta para todo el dia",
        "price": 4600,
        
      },
      {
        "_id": 14,
        "category": "Zapatos",
        "image": "zapatos5.jpg",
        "title": "Sandalia Lucy",
        "description": "Sandalia de cuero comoda y perfecta para todo el dia",
        "price": 5200,
        
      },
      {
        "_id": 15,
        "category": "Zapatos",
        "image": "zapatos6.jpg",
        "title": "Zapatilla Snow",
        "description": "Zapatilla de cuero, super combinable y comoda para todo uso",
        "price": 3800,
        
      },
      {
        "_id": 16,
        "category": "Ropa",
        "image": "dress.jpg",
        "title": "Vestido Florence",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        "price": 2700,
        
      },
      {
        "_id": 17,
        "category": "Ropa",
        "image": "dress5.jpg",
        "title": "Vestido Yasmin",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        "price": 4000,
        
      },
      {
        "_id": 18,
        "category": "Ropa",
        "image": "dress6.jpg",
        "title": "Vestido Sky",
        "description": "Ultima tendencia, no importa quién seas, de dónde seas y qué estés haciendo",
        "price": 4200,
      }
    ];


    productos.forEach((obj) => {
        db.collection("productos")
          .add({
            id: obj.id,
            category: obj.category,
            title: obj.title,
            description: obj.description,
            image: obj.image,
            price: obj.price,
          })
          .then((docRef) => {
            console.log("Producto registrado con ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error al agregar un documento: ", error);
          });
      });
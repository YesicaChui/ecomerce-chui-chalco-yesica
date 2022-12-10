const Productos =[
    {"id":2,"nombre": "Paleta de sombras","descripcion": "Milani Eyeshadow palette", "precio":99,"categoria":1,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/MILA-PALE-EYESHADOWPALETTE-MAEP01MOSTEYESHADOWPALETTE_500x.png?v=1606542835"},
    {"id":1,"nombre": "AVENE", "descripcion":"XERACALM A.D. CREMA RELIPIDIZANTE", "precio":164,"categoria":2,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/AVEN-PISE-XERACALMADCREMARELIPIDIZANTE-200ML_500x.png?v=1581208357"},
    {"id":3,"nombre": "Anaphase","descripcion": "Acondicionador Anticaida", "precio":138,"categoria":3,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/DUCR-ACON-ANAPHASEACONDICIONADORANTICAIDA-200ML_500x.png?v=1551397373"},
    {"id":4,"nombre": "Rimer de ojos","descripcion": "Essence Mascara Make me brow ehyebrow gel", "precio":12,"categoria":1,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/ESSE-MAPE-MAKEMEBROWEYEGELMASCARA-01_500x.jpg?v=1527360378"},
    {"id":5,"nombre": "URIAGE", "descripcion":"XEMOSE SYNDET 500ML", "precio":89,"categoria":2,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/URIA-PISE-XEMOSESYNDET-500ML_500x.png?v=1584120787"},
    {"id":6,"nombre": "ELUCION","descripcion": "SHAMPOO ANTICASPA", "precio":72,"categoria":3,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/DUCR-SHAM-ELUCIONSHAMPOOANTICASPA-300ML_500x.png?v=1551398864"},
    {"id":7,"nombre": "Base Liquida","descripcion": "Catrice Base HD LIQUID COVERAGE FOUNDATION", "precio":34,"categoria":1,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/CATR-BASE-HDLIQUIDCOVERAGEFOUNDATION-002_500x.png?v=1597166183"},
    {"id":8,"nombre": "URIAGE XEMOSE","descripcion": "URIAGE XEMOSE CERATO 200ML", "precio":104,"categoria":2,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/URIA-PISE-XEMOSECERATO-200ML_500x.png?v=1583787022"},
    {"id":9,"nombre": "ARGEAL","descripcion": "SHAMPOO PARA CABELLO GRASO", "precio":108,"categoria":3,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/DUCR-SHAM-ARGEALSHAMPOO-150ML_500x.png?v=1551398701"},
    {"id":10,"nombre": "PREBASE","descripcion": "PREBASE PRIME AND FINE PORE", "precio":23,"categoria":1,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/CATR-BASE-PRIMEANDFINEANTISHINEBASE_500x.jpg?v=1527361523"},
    {"id":11,"nombre": "PILOPETAN","descripcion": "WOMAN SERUM REPARADOR CAPILAR", "precio":105,"categoria":2,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/PILO-SERU-WOMANSERUMREPARADORCAPILAR-30ML_500x.png?v=1646293100"},
    {"id":12,"nombre": "BATISTE", "descripcion":"DRY SHAMPOO LIGHTH BLONDE", "precio":59,"categoria":3,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/web_Batiste-Light-Blonde-200ml_500x.jpg?v=1527363251"},
    {"id":13,"nombre": "Polvo para rostro","descripcion": "Catrice Polvo matificante All Matt Plus", "precio":18,"categoria":1,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/CATR-POLV-POLVOSALLMATTPLUSSHINECONTROL-025SANDBEIGE_500x.png?v=1596820546"},
    {"id":14,"nombre": "MEDISCIENCE","descripcion": "UV CARE LIPSTICK FPS 50+", "precio":36,"categoria":2,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/MEDI-PRLA-UVCARELIPSFPS50-5GR_500x.png?v=1586424122"},
    {"id":15,"nombre": "RECAMIER", "descripcion":"MEN SHAMPOO ANTICAIDA SIN SAL", "precio":22,"categoria":3,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/RECA-ANCA-VITANEMENSHAMPOOANTICAIDASINSAL-400ML_500x.png?v=1624057020"},
    {"id":16,"nombre": "Rimer Pestaña", "descripcion":"Milani Stay Put Brow Color", "precio":46,"categoria":1,"imagen":"https://cdn.shopify.com/s/files/1/0903/0912/products/MILA-DECE-STAYPUTBROWCOLOR-SOFTBROWN-01_500x.png?v=1585714021"}
]

const SERVICE_TIMEOUT = 500;

export function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, SERVICE_TIMEOUT);
  });
}

export function getProductosCategoryId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ProductosFiltrados = Productos.filter((producto)=>producto.categoria==id)

      resolve(ProductosFiltrados);
    }, SERVICE_TIMEOUT);
  });
}

export function getProductoId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ProductosFiltrados = Productos.find((producto)=>producto.id==id)

      resolve(ProductosFiltrados);
    }, SERVICE_TIMEOUT);
  });
}

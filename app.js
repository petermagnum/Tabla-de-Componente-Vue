const app = new Vue({
  el: "#app",
  data: {
    titulo: "Mantenedor de Productos",
    Productos: [],
    nuevoProducto: "",
    nuevaDescripcion: "",
    nuevoPrecio: "",
  },
  methods: {
    agregarProducto: function () {
      if (this.nuevoProducto == "" || this.nuevaDescripcion == "" || this.nuevoPrecio <= 0) {
        console.log("Llene todos los campos y un precio superior a 0");
        alert("Llene todos los campos y un precio superior a 0")
      } else {
        this.Productos.push({
          nombre: this.nuevoProducto,
          descripcion: this.nuevaDescripcion,
          precio: this.nuevoPrecio,
          estado: false,
        });

        this.nuevoProducto = "";
        this.nuevaDescripcion = "";
        this.nuevoPrecio = "";
      }
    },

    editarProducto: function (index) {
      this.Productos[index].estado = true;
    },
    eliminarProducto: function (index) {
      this.Productos.splice(index, 1);
    },
  },
});

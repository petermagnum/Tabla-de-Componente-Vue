const app = new Vue({
  el: "#app",
  data: {
    titulo: "Mantenedor de Productos",
    Productos: [],
    nuevoProducto: "",
    nuevaDescripcion: "",
    nuevoPrecio: "",

    editProducto:"",
    editDescripcion: "",
    editPrecio: "",
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

        this.editProducto="";
        this.editDescripcion= "";
        this.editPrecio= "";

      }
    },

    setearProducto: function (index) {

        this.editProducto =this.Productos[index].nombre;
        this.editDescripcion= this.Productos[index].descripcion;
        this.editPrecio= this.Productos[index].precio;
      
      },

    editarProducto: function (index) {


      this.Productos[index].nombre = this.editProducto;
      this.Productos[index].descripcion = this.editDescripcion;
      this.Productos[index].precio = this.editPrecio;

      this.editProducto="";
      this.editDescripcion= "";
      this.editPrecio= "";

    },
    eliminarProducto: function (index) {
      this.Productos.splice(index, 1);
    },
  },
});

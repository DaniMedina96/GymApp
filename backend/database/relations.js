const Usuario = require('../api/models/usuario.model');
const Ejercicio = require('../api/models/ejercicio.model');
const Rutinas = require('../api/models/rutina.model');
const Planing = require('../api/models/planing.model');
const Grupos_musculares = require('../api/models/grupo_muscular.model');
const Datos_Usuario = require('../api/models/datos_usuario.model');
const Roles = require('../api/models/rol.model');
const Rel_planing_rutina = require('../api/models/rel_planing_rutina.model');

 
const defineRelations = () => {
    Usuario.hasMany(Rutinas, { foreignKey: "creador" });
    Rutinas.belongsTo(Usuario, { foreignKey: "creador" });

    Rutinas.belongsToMany(Planing, {
      through: Rel_planing_rutina,
      foreignKey: "idRutina",
      timestamps: false
    });
    Planing.belongsToMany(Rutinas, {
      through: Rel_planing_rutina,
      foreignKey: "idPlaning",
      timestamps: false
    });

     Rutinas.belongsToMany(Ejercicio, {
       through: "rel_rutina_ejercicio",
       foreignKey: "idRutina",
       timestamps: false
     });

     Ejercicio.belongsToMany(Rutinas, {
       through: "rel_rutina_ejercicio",
       foreignKey: "idEjercicio",
       timestamps: false
     });

     Ejercicio.belongsToMany(Usuario, {
       through: "rel_ejercicio_usuario",
       foreignKey: "idEjercicio",
       timestamps: false
     });

     Usuario.belongsToMany(Ejercicio, {
       through: "rel_ejercicio_usuario",
       foreignKey: "idUsuario",
       timestamps: false
       
     });
     
 


    Grupos_musculares.hasMany(Ejercicio, { foreignKey: "grupo_muscular" });
    Ejercicio.belongsTo(Grupos_musculares, { foreignKey: "grupo_muscular"});

    Roles.hasMany(Usuario, { foreignKey: "rol" });
    Usuario.belongsTo(Roles, { foreignKey: "rol" });

    Usuario.hasOne(Datos_Usuario, { foreignKey: "idUsuario" });
    Datos_Usuario.belongsTo(Usuario, { foreignKey: "idUsuario" });

    
     Rutinas.belongsToMany(Usuario, {
       through: "rel_rutina_usuario",
       foreignKey: "idRutina",
       timestamps: false    
     });
     Usuario.belongsToMany(Rutinas, {
       through: "rel_rutina_usuario",
       foreignKey: "idUsuario",
       timestamps: false
     });

};

module.exports = defineRelations
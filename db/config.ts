// db/config.ts
import { defineDb, defineTable, column } from 'astro:db';

// Tabla de lugares accesibles
const Lugares = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    nombre: column.text(),
    descripcion: column.text(),
    direccion: column.text(),
    ciudad: column.text(),
    region: column.text(),
    tipo: column.text(),
    certificadoYapaykuy: column.boolean({ default: false }),
    
    // Características de accesibilidad
    rampaAcceso: column.boolean({ default: false }),
    banioAdaptado: column.boolean({ default: false }),
    estacionamientoAccesible: column.boolean({ default: false }),
    senaleticaBraille: column.boolean({ default: false }),
    audioguia: column.boolean({ default: false }),
    personalCapacitado: column.boolean({ default: false }),
    
    // Información de contacto
    telefono: column.text({ optional: true }),
    email: column.text({ optional: true }),
    sitioWeb: column.text({ optional: true }),
    
    // Metadatos
    imagenUrl: column.text({ optional: true }),
    fechaCreacion: column.date({ default: new Date() }),
  },
});

// Exportar la configuración de la base de datos
export default defineDb({
  tables: { Lugares },
});
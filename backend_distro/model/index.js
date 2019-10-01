import User from "../module/user/user.model"
import Place from "../module/place/place.model"
import Role from "../module/role/role.model"
import { Barang, BarangType, Stok } from "../module/barang/barang.model"

import conn from "../config/datasource"

conn.sync({
  // force: true
})

Place.hasMany(User, {foreignKey:'place_id'})  
User.belongsTo(Place, {foreignKey: 'place_id'})

Role.hasMany(User, {foreignKey:'role_id'})  
User.belongsTo(Role, {foreignKey: 'role_id'})

Place.hasMany(Stok, {foreignKey:'place_id'})
Stok.belongsTo(Place, {foreignKey: 'place_id'})

Barang.hasMany(BarangType, {foreignKey:'barang_id'})
BarangType.belongsTo(Barang, {foreignKey: 'barang_id'})

BarangType.hasMany(Stok, {foreignKey:'barang_type_id'})
Stok.belongsTo(BarangType, {foreignKey: 'barang_type_id'})


export { User, Place, Role, Barang, BarangType, Stok, }

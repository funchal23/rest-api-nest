import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


export enum Status {
    ATIVO = 'ativo',
    INATIVO = 'inativo'
}

@Table({
    tableName: 'jovens',
    updatedAt: 'updated_at',
    createdAt: 'created_at'
})
export class Joven extends Model {

    @PrimaryKey
    @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4})
    id: string;

    @Column({allowNull: false, defaultValue: Status.ATIVO})
    status: Status;

    @Column({allowNull: false})
    nome: string;
}

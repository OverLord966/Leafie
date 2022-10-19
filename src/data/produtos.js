import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "Leafie"
const COLLECTION_NAME = "produtos"

//insere um produto na base de dados
async function insertNewProduct(product) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(product)).insertedId
}

//deleta um produto pelo seu id
async function deleteProductById(productId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.delete({ _id: new ObjectId(productId) })
}

export {
    insertNewProduct,
    deleteProductById
}
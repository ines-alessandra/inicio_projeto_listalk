import api from "../http-common";

export async function getCategories(){
    try{
        const response = await api.get("/category")
        return response.data;
    }
    catch (error){
        console.log("erro ao buscar categorias " + error);
    }
}

export async function createCategories(data){
    try{
        const response = await api.post("/category", data)
        return response.data;
    }
    catch (error){
        console.log("erro ao criar categorias " + error);
    }
}

export async function getLists(){
    try{
        const response = await api.get("/myList")
        return response.data;
    }
    catch (error){
        console.log("erro ao buscar listas " + error);
    }
}

export async function createList(data){
    try{
        const response = await api.post("/myList", data)
        return response.data;
    }
    catch (error){
        console.log("erro ao buscar listas " + error);
    }
} 

export async function createItem(id, data){
    try{
        const response = await api.post(`/myList/${id}/item`, data)
        return response.data;
    }
    catch (error){
        console.log("erro ao criar item " + error);
    }
} 

export async function getItem(id){
    try{
        const response = await api.get(`/myList/${id}/item`)
        return response.data;
    }
    catch (error){
        console.log("erro ao buscar Item " + error);
    }
}

export async function getList(id){
    try{
        const response = await api.get(`/myList/${id}`)
        return response.data;
    }
    catch (error){
        console.log("erro ao buscar Item " + error);
    }
}

export async function updateList(id, data){
    try{
        const response = await api.post(`/myList/${id}`, data)
        return response.data;
    }
    catch (error){
        console.log("erro ao editar Lista " + error);
    }
}   

export async function deleteList(id){
    try{
        const response = await api.delete(`/myList/${id}`)
        return response.data;
    }
    catch (error){
        console.log("erro ao deletar Lista " + error);
    }
} 
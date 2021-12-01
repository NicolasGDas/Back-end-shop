export default class Subscription {
    constructor(subscriptions) {
        this.subscriptions    = subscriptions
        
    }

    verificar_sub(id_sub){

        let retorno = []
        let encontrado = false
        let i = 0
        while (i < this.subscriptions.length && !encontrado){
            if (this.subscriptions[i]["id"] == id_sub){
                encontrado = true 
                retorno = [{
                    title: this.subscriptions[i]["meses"],
                    unit_price: this.subscriptions[i]["precio"],
                    quantity: 1
                }]
            }
            i++
        }
        return retorno
    }
}
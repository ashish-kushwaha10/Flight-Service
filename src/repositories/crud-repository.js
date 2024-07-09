const { where } = require("sequelize");
const { Logger } = require("../config")

class CrudRepository {
    constructor(model) {
        this.model = model
    }

    // create method
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;

        } catch (error) {
            Logger.info("something went wrong in the crud repo: create method");
            throw error;
        }
    }

    // delete method
    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;

        } catch (error) {
            Logger.info("something went wrong in the crud repo: destroy method");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.info("something went wrong in the crud repo: get method");
            throw error;
        }
    }

    async getAll(){ // gives you array of all the records
        try {
            const response = await this.model.findByPk();
            return response;
        } catch (error) {
            Logger.info("something went wrong in the crud repo: getAll method");
            throw error;
        }
    }

    async update(id,data) { // data --> {column: value .....}
        try {
            const response = await this.model.update(data, {
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            Logger.info("something went wrong in the crud repo: update method");
            throw error;
        }
    }

}

module.exports = CrudRepository;
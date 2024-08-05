const transactionRepository = require('../repositories/transactionRepository');

const transactionService = {
    async create(args){
        try{
            const data = await transactionRepository.create(args);
            return data;
        }catch(err){
            throw new Error(err.message);
        }
    },

    async findOne(id){
        try{
            const data = await transactionRepository.findOne(id);
            if(!data){
                throw new Error("Transaction not found!");
            }
            return data;
        }catch(err){
            throw new Error(err.message);
        }
    },

    async findAll(){
        try{
            const data = await transactionRepository.findAll();
            return data;
        }catch(err){
            throw new Error(err.message);
        }
    },

    async update(args, id){
        try{
            const check = await transactionRepository.findOne(id);
            if(!check){
                throw new Error("Transaction not found!");
            }
            const data = await transactionRepository.update(args, id);
            return data;
        }catch(err){
            throw new Error(err.message);
        }
    }
};

module.exports = transactionService;